<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/loot.svg" alt="" width="18" height="18">
                Party loot splitter
            </h2>
        </div>
        <div class="card-content">
            <form v-on:submit.prevent="parseLog">
                <div class="input-group large right">
                    <textarea v-model="log"></textarea>
                    <button>Split loot</button>
                </div>
                <small>Copy <strong>entire</strong> log from Party Hunt Analyser. Application <strong>do not</strong> store or validate pasted log.</small>
            </form>
            <small></small>
            <template v-if="parsed">
                <div class="row row-wrap">
                    <div class="col col-25"
                        v-for="(player, index) in logParsed"
                        v-bind:class="{ 'balance-green': player.loot > player.supplies, 'balance-orange': player.loot === player.supplies, 'balance-red': player.loot < player.supplies }"
                        v-bind:key="index">
                        <h3 class="mt ellipsis">
                            {{ player.name }}
                            <img src="icons/remove.svg" alt="" width="24" height="24" title="Remove player"
                                v-on:click="removePlayer(index)">
                        </h3>
                        <div class="input-group left mts">
                            <label v-bind:for="'loot_' + index">Loot</label>
                            <input type="number" v-bind:id="'loot_' + index"
                                v-model.number="player.loot"
                                v-on:change="updateResult">
                        </div>
                        <div class="input-group left mts">
                            <label v-bind:for="'supplies_' + index">Supplies</label>
                            <input type="number" v-bind:id="'supplies_' + index"
                                v-model.number="player.supplies"
                                v-on:change="updateResult">
                        </div>
                    </div>
                </div>
                <div class="mts">
                    <small>
                        You can edit values in text fields.<br>
                        You can remove player by clicking on '<strong>x</strong>' icon.
                    </small>
                </div>
                <div class="mt">
                    <p class="loot-transfer"
                        v-for="(row, index) in transfer"
                        v-bind:key="index">
                        <strong>{{ row.from }}</strong> should transfer <strong>{{ formatNumber(row.gold) }}</strong> gp to <strong>{{ row.to }}</strong>.
                        <img src="icons/copy.svg" alt="" width="24" height="24"
                            v-bind:title="'transfer ' + row.gold + ' to ' + row.to"
                            v-on:click="copyToClipboard('transfer ' + row.gold + ' to ' + row.to)">
                    </p>
                </div>
                <div class="mts">
                    <small>
                        You can copy '<strong>transfer [amount] to [name]</strong>' by clicking on icon after text.
                    </small>
                </div>
                <div class="row mt">
                    <div class="col">
                        <div class="badge"
                            v-bind:class="{ 'green': teamBalance > 0, 'orange': teamBalance === 0, 'red': teamBalance < 0 }">
                            Team balance
                            <span>{{ formatNumber(teamBalance) }}</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="badge"
                            v-bind:class="{ 'green': playerBalance > 0, 'orange': playerBalance === 0, 'red': playerBalance < 0 }">
                            Each player balance
                            <span>{{ formatNumber(playerBalance) }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </article>
</template>

<style lang="scss">
@use '../../scss/variables' as *;
    
.ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.balance-green {
    input {
        border-color: $green;
    }
}

.balance-orange {
    input {
        border-color: $orange;
    }
}

.balance-red {
    input {
        border-color: $red;
    }
}

.loot-transfer {
    margin: 0.5rem 0 0;
    img {
        vertical-align: middle;
        margin: 0 0 0 5px;
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>

<script>
    export default {
        name: 'Loot',

        data: function () {
            return {
                log: '',
                logParsed: [],
                parsed: false,
                teamSize: 0,
                teamBalance: 0,
                playerBalance: 0,
                transfer: []
            }
        },

        methods: {
            parseLog: function () {
                let temp = this.log.split('\n'),
                    regex = /\d+/g;

                temp.splice(0, 6);

                this.teamSize = temp.length / 6;
                this.teamBalance = 0;
                this.logParsed = [];
                this.transfer = [];

                for (let i = 0; i < this.teamSize; i++) {
                    let name = temp[i * 6].replace(" (Leader)", ""),
                        loot = parseInt(temp[i * 6 + 1].replaceAll(',', '').match(regex)),
                        supplies = parseInt(temp[i * 6 + 2].replaceAll(',', '').match(regex)),
                        balance = loot - supplies;

                    this.logParsed.push({ name: name, loot: loot, supplies: supplies, balance: balance });
                    this.teamBalance = this.teamBalance + loot - supplies;
                }

                this.playerBalance = Math.floor(this.teamBalance / this.teamSize);

                if (isNaN(this.playerBalance)) this.playerBalance = 0;

                this.transferFromTo();

                this.parsed = true;
            },
            updateResult: function () {
                this.teamBalance = 0;

                this.logParsed.forEach(player => {
                    this.teamBalance = this.teamBalance + parseInt(player.loot) - parseInt(player.supplies);
                    player.balance = parseInt(player.loot) - parseInt(player.supplies);
                });

                this.playerBalance = Math.floor(this.teamBalance / this.teamSize);

                if (isNaN(this.playerBalance)) this.playerBalance = 0;

                this.transferFromTo();
            },
            removePlayer: function (index) {
                this.logParsed.splice(index, 1);
                this.teamSize--;
                this.updateResult();
            },
            transferFromTo: function () {
                let vm = this;

                vm.transfer = [];

                vm.logParsed.forEach((player, index) => {
                    if (player.balance > vm.playerBalance) {
                        let availableFunds = Math.abs(player.balance - vm.playerBalance),
                            playerIndex = index;
                
                        vm.logParsed.forEach((player, index) => {
                            if (availableFunds > 0 && player.balance < vm.playerBalance) {
                                let playerNeed = Math.abs(player.balance - vm.playerBalance),
                                    transferAmount = 0;

                                if (playerNeed < availableFunds) {
                                    transferAmount = playerNeed;
                                    availableFunds -= playerNeed;
                                } else {
                                    transferAmount = availableFunds;
                                    availableFunds = 0;
                                }

                                player.balance += transferAmount;
                                vm.logParsed[playerIndex].balance -= transferAmount;

                                vm.transfer.push({ from: vm.logParsed[playerIndex].name, to: player.name, gold: transferAmount });
                            }
                        });
                    }
                });
            },
            copyToClipboard: function (text) {
                let textarea = document.createElement('textarea');

                textarea.textContent = text;
                textarea.style.position = 'fixed';
                document.body.appendChild(textarea);
                textarea.select();

                try {
                    return document.execCommand('copy');
                }
                catch (ex) {
                    console.warn('Copy to clipboard failed.', ex);
                    return false;
                }
                finally {
                    document.body.removeChild(textarea);
                }
            },
            formatNumber: function (number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>
