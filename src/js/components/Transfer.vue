<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/transfer.svg" alt="" width="18" height="18">
                Where can I transfer?
            </h2>
        </div>
        <div class="card-content">
            <div class="input-group large left">
                <label for="server">Current server</label>
                <select id="server"
                    v-model="selectedServer">
                    <option value="" disabled selected>Select...</option>
                    <option
                        v-for="(server, key) in servers"
                        v-bind:value="key"
                        v-bind:key="key">{{ key }}</option>
                </select>
            </div>
            <template v-if="selectedServer">
                <table class="mt table-fixed">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th class="center">Location</th>
                        <th class="center">Type</th>
                        <th class="center hide-on-mobile">BattlEye</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {{ selectedServer }}
                            <span class="server-info-icon hide-on-mobile"
                                v-if="servers[selectedServer].premium">
                                <img alt="" title="Premium" src="icons/premium.svg" width="18" height="18">
                            </span>
                            <span class="server-info-icon hide-on-mobile"
                                v-if="servers[selectedServer].blocked">
                                <img alt="" title="Server blocked" src="icons/blocked.svg" width="18" height="18">
                            </span>
                            <span class="server-info-icon hide-on-mobile"
                                v-if="servers[selectedServer].locked">
                                <img alt="" title="Server locked" src="icons/locked.svg" width="18" height="18">
                            </span>
                        </td>
                        <td class="center">
                            <img alt="" width="30" height="30"
                                v-bind:src="location[servers[selectedServer].location]"
                                v-bind:title="servers[selectedServer].location">
                        </td>
                        <td class="center">
                            <img alt="" width="30" height="30"
                                v-bind:src="types[servers[selectedServer].type]"
                                v-bind:title="servers[selectedServer].type">
                        </td>
                        <td class="center hide-on-mobile">
                            <img alt=""
                                v-bind:src="battleEye[servers[selectedServer].green].img"
                                v-bind:title="battleEye[servers[selectedServer].green].title">
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h3 class="mt">You can transfer to:</h3>
                <table class="mt table-fixed">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th class="center">Location</th>
                        <th class="center">Type</th>
                        <th class="center hide-on-mobile">BattlEye</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template
                        v-for="(server, key) in servers"
                        v-bind:key="key">
                        <tr v-if="checkServer(key, server)">
                            <td>
                                {{ key }}
                                <span class="server-info-icon hide-on-mobile"
                                    v-if="server.premium">
                                    <img alt="" title="Premium" src="icons/premium.svg" width="18" height="18">
                                </span>
                                <span class="server-info-icon hide-on-mobile"
                                    v-if="server.blocked">
                                    <img alt="" title="Server blocked" src="icons/blocked.svg" width="18" height="18">
                                </span>
                                <span class="server-info-icon hide-on-mobile"
                                    v-if="server.locked">
                                    <img alt="" title="Server locked" src="icons/locked.svg" width="18" height="18">
                                </span>
                            </td>
                            <td class="center">
                                <img alt="" width="30" height="30"
                                    v-bind:src="location[server.location]"
                                    v-bind:title="server.location">
                            </td>
                            <td class="center">
                                <img alt="" width="30" height="30"
                                    v-bind:src="types[server.type]"
                                    v-bind:title="server.type">
                            </td>
                            <td class="center hide-on-mobile">
                                <img alt=""
                                    v-bind:src="battleEye[server.green].img"
                                    v-bind:title="battleEye[server.green].title">
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../scss/variables' as *;

.server-info-icon {
    vertical-align: middle;
    display: inline-flex;
    margin: 0 0 0 5px;
    padding: 5px;
    background-color: $text;
    border-radius: 50%;
}
</style>

<script>
    export default {
        name: 'Transfer',

        data: function () {
            return {
                location: {
                    'Europe': 'img/transfer/eu.webp',
                    'North America': 'img/transfer/na.webp',
                    'South America': 'img/transfer/sa.webp'
                },
                types: {
                    'optional pvp': 'img/transfer/optional.webp',
                    'open pvp': 'img/transfer/open.webp',
                    'retro open pvp': 'img/transfer/retro.webp',
                    'retro hardcore pvp': 'img/transfer/retro-hardcore.webp',
                    'hardcore pvp': 'img/transfer/hardcore.webp'
                },
                battleEye: {
                    true: { img: 'img/transfer/green.webp', title: 'Green BattleEye' },
                    false: { img: 'img/transfer/yellow.webp', title: 'Yellow BattleEye' }
                },
                servers: {
                    'Adra': { location: 'Europe', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Alumbra': { location: 'South America', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Antica': { location: 'Europe', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Ardera ': { location: 'North America', type: 'retro hardcore pvp', green: true, blocked: true, locked: false, premium: false },
                    'Astera': { location: 'North America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Bastia': { location: 'Europe', type: 'retro hardcore pvp', green: true, blocked: false, locked: false, premium: false },
                    'Batabra': { location: 'South America', type: 'retro open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Belobra': { location: 'South America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Bona': { location: 'Europe', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Cadebra': { location: 'South America', type: 'retro hardcore pvp', green: true, blocked: true, locked: false, premium: false },
                    'Calmera': { location: 'North America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Celebra': { location: 'South America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Celesta': { location: 'Europe', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Collabra': { location: 'South America', type: 'optional pvp', green: true, blocked: false, locked: false, premium: false },
                    'Damora': { location: 'Europe', type: 'optional pvp', green: true, blocked: false, locked: false, premium: false },
                    'Descubra': { location: 'South America', type: 'optional pvp', green: true, blocked: false, locked: false, premium: false },
                    'Dibra': { location: 'South America', type: 'open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Epoca': { location: 'Europe', type: 'retro open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Esmera': { location: 'North America', type: 'optional pvp', green: true, blocked: true, locked: false, premium: true },
                    'Famosa': { location: 'Europe', type: 'optional pvp', green: true, blocked: true, locked: false, premium: false },
                    'Fera': { location: 'North America', type: 'retro hardcore pvp', green: true, blocked: false, locked: false, premium: false },
                    'Ferobra': { location: 'South America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Firmera': { location: 'North America', type: 'retro open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Gentebra': { location: 'South America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Gladera': { location: 'North America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Harmonia': { location: 'Europe', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Havera': { location: 'North America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Honbra': { location: 'South America', type: 'open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Illusera': { location: 'North America', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Impulsa': { location: 'Europe', type: 'retro open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Inabra': { location: 'South America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Issobra': { location: 'South America', type: 'optional pvp', green: true, blocked: true, locked: false, premium: true },
                    'Kalibra': { location: 'South America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Karna': { location: 'Europe', type: 'optional pvp', green: true, blocked: true, locked: false, premium: false },
                    'Libertabra': { location: 'South America', type: 'retro hardcore pvp', green: true, blocked: false, locked: false, premium: false },
                    'Lobera': { location: 'North America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Luminera': { location: 'North America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Lutabra': { location: 'South America', type: 'retro open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Marbera': { location: 'North America', type: 'optional pvp', green: true, blocked: false, locked: false, premium: false },
                    'Marcia': { location: 'Europe', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Menera': { location: 'North America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Monza': { location: 'Europe', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Mudabra': { location: 'South America', type: 'retro open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Mykera': { location: 'North America', type: 'retro open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Nadora': { location: 'Europe', type: 'optional pvp', green: true, blocked: true, locked: false, premium: true },
                    'Nefera': { location: 'North America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Nossobra': { location: 'South America', type: 'retro open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Ocebra': { location: 'South America', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Olima': { location: 'Europe', type: 'optional pvp', green: true, blocked: false, locked: false, premium: false },
                    'Ombra': { location: 'South America', type: 'open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Optera': { location: 'North America', type: 'optional pvp', green: true, blocked: true, locked: false, premium: false },
                    'Pacera': { location: 'North America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Peloria': { location: 'Europe', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Premia': { location: 'Europe', type: 'open pvp', green: false, blocked: false, locked: false, premium: true },
                    'Quelibra': { location: 'South America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Quintera': { location: 'North America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Refugia': { location: 'Europe', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Reinobra': { location: 'South America', type: 'optional pvp', green: false, blocked: true, locked: false, premium: false },
                    'Seanera': { location: 'North America', type: 'open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Secura': { location: 'Europe', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Serdebra': { location: 'South America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Solidera': { location: 'North America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Suna': { location: 'Europe', type: 'open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Talera': { location: 'North America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Tembra': { location: 'South America', type: 'optional pvp', green: true, blocked: true, locked: false, premium: false },
                    'Thyria': { location: 'Europe', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Trona': { location: 'Europe', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Utobra': { location: 'South America', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Venebra': { location: 'South America', type: 'optional pvp', green: true, blocked: false, locked: false, premium: false },
                    'Versa': { location: 'Europe', type: 'retro hardcore pvp', green: true, blocked: true, locked: false, premium: true },
                    'Visabra': { location: 'South America', type: 'retro hardcore pvp', green: true, blocked: false, locked: false, premium: false },
                    'Vunira': { location: 'Europe', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Wintera': { location: 'North America', type: 'open pvp', green: false, blocked: false, locked: false, premium: false },
                    'Wizera': { location: 'North America', type: 'open pvp', green: true, blocked: true, locked: false, premium: false },
                    'Xandebra': { location: 'South America', type: 'open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Yonabra': { location: 'South America', type: 'optional pvp', green: false, blocked: false, locked: false, premium: false },
                    'Zenobra': { location: 'South America', type: 'open pvp', green: true, blocked: false, locked: false, premium: false },
                    'Zuna': { location: 'Europe', type: 'hardcore pvp', green: false, blocked: false, locked: true },
                    'Zunera': { location: 'North America', type: 'hardcore pvp', green: false, blocked: false, locked: true }
                },
                selectedServer: ''
            }
        },

        methods: {
            checkServer: function (name, props) {
                let fromName = this.selectedServer,
                    fromProps = this.servers[this.selectedServer];

                if (name === fromName) return false;

                if (props.blocked) return false;

                if (fromProps.locked) return (fromProps.locked && props.locked);
                
                if (fromProps.type === 'retro hardcore pvp') {
                    if (props.green) return fromProps.green;
                };

                if (props.type === 'retro hardcore pvp') return false;

                if (fromProps.type === 'retro open pvp' || fromProps.type === 'open pvp') {
                    if (!fromProps.green) return !props.green;
                } else {
                    if (props.type === 'retro open pvp' || props.type ===  'open pvp') return false;
                }

                if (!fromProps.green) return !props.green;

                return true;
            }
        }
    }
</script>
