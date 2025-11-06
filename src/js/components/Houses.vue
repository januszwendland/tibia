<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/houses.svg" alt="" width="18" height="18">
                Find free houses
            </h2>
        </div>
        <div class="card-content">
            <div class="input-group large left">
                <label for="server">Select server</label>
                <select id="server"
                    v-model="selectedServer"
                    v-on:change="checkServer">
                    <option value="" disabled selected>Select...</option>
                    <option
                        v-for="(server, index) in servers"
                        v-bind:value="server"
                        v-bind:key="index">{{ server }}</option>
                </select>
            </div>
            <small>This tool depends on <a href="https://tibiadata.com/" rel="noopener" target="_blank">TibiaData API</a></small>
            <div class="mt"
                v-if="selectedServer">
                <div class="filters-pills">
                    <span class="filters-pill"
                        v-for="(town, index) in towns"
                        v-on:click="filter(town)"
                        v-bind:class="{ 'selected': filterByTown === town }"
                        v-bind:key="index">{{ town }}</span>
                </div>
                <small class="filters-info">Filter by town.</small>
            </div>
            <div class="mt"
                v-if="selectedServer">
                <div class="filters-pills">
                    <span class="filters-pill"
                        v-bind:class="{ 'selected': isBidded }"
                        v-on:click="showBidded()">Is bidded</span>
                    <span class="filters-pill"
                        v-bind:class="{ 'selected': hoursLeft }"
                        v-on:click="showHours()">Hours left</span>
                </div>
                <small class="filters-info">Other filers.</small>
            </div>
            <template
                v-for="(town, name) in server"
                v-bind:key="name">
                <template v-if="selectedServer && (town != null && town.length) && (!filterByTown || filterByTown === name)">
                    <h3 class="mt">{{ name }}</h3>
                    <table class="mt table-fixed">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th class="hide-on-mobile">Rent</th>
                            <th class="hide-on-mobile">Size</th>
                            <th>Current bid</th>
                            <th>Time left</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template
                            v-for="(house, index) in town"
                            v-bind:key="index">
                            <tr v-if="house.status !== 'rented'">
                                <td>
                                    <a v-bind:href="'https://www.tibia.com/community/?subtopic=houses&page=view&world=' + selectedServer + '&houseid=' + house.house_id" target="_blank">{{ house.name }}</a>
                                </td>
                                <td class="hide-on-mobile">{{ formatNumber(house.rent) }}</td>
                                <td class="hide-on-mobile">{{ house.size }}</td>
                                <td>{{ formatNumber(house.auction.current_bid) }}</td>
                                <td>{{ house.auction.time_left || "-" }}</td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </template>
            </template>
            <div class="loader-wrapper" v-if="loader > 0">
                <div class="loader" role="status"></div>
            </div>
        </div>
    </article>
</template>

<script>
    import axios from 'axios';
    import serversList from '../helpers/servers.js';

    export default {
        name: 'Houses',

        data: function () {
            return {
                servers: serversList,
                selectedServer: '',
                towns: [
                    'Ab\'Dendriel',
                    'Ankrahmun',
                    'Candia',
                    'Carlin',
                    'Darashia',
                    'Edron',
                    'Farmine',
                    'Gray Beach',
                    'Issavi',
                    'Kazordoon',
                    'Liberty Bay',
                    'Moonfall',
                    'Port Hope',
                    'Rathleton',
                    'Silvertides',
                    'Svargrond',
                    'Thais',
                    'Venore',
                    'Yalahar'
                ],
                server: {
                    'Ab\'Dendriel': null,
                    'Ankrahmun': null,
                    'Carlin': null,
                    'Candia': null,
                    'Darashia': null,
                    'Edron': null,
                    'Farmine': null,
                    'Gray Beach': null,
                    'Issavi': null,
                    'Kazordoon': null,
                    'Liberty Bay': null,
                    'Moonfall': null,
                    'Port Hope': null,
                    'Rathleton': null,
                    'Svargrond': null,
                    'Silvertides': null,
                    'Thais': null,
                    'Venore': null,
                    'Yalahar' : null
                },
                serverFree: {
                    'Ab\'Dendriel': null,
                    'Ankrahmun': null,
                    'Carlin': null,
                    'Candia': null,
                    'Darashia': null,
                    'Edron': null,
                    'Farmine': null,
                    'Gray Beach': null,
                    'Issavi': null,
                    'Kazordoon': null,
                    'Liberty Bay': null,
                    'Moonfall': null,
                    'Port Hope': null,
                    'Rathleton': null,
                    'Svargrond': null,
                    'Silvertides': null,
                    'Thais': null,
                    'Venore': null,
                    'Yalahar' : null
                },
                serverBidded: {
                    'Ab\'Dendriel': null,
                    'Ankrahmun': null,
                    'Carlin': null,
                    'Candia': null,
                    'Darashia': null,
                    'Edron': null,
                    'Farmine': null,
                    'Gray Beach': null,
                    'Issavi': null,
                    'Kazordoon': null,
                    'Liberty Bay': null,
                    'Moonfall': null,
                    'Port Hope': null,
                    'Rathleton': null,
                    'Svargrond': null,
                    'Silvertides': null,
                    'Thais': null,
                    'Venore': null,
                    'Yalahar' : null
                },
                serverHoursLeft: {
                    'Ab\'Dendriel': null,
                    'Ankrahmun': null,
                    'Carlin': null,
                    'Candia': null,
                    'Darashia': null,
                    'Edron': null,
                    'Farmine': null,
                    'Gray Beach': null,
                    'Issavi': null,
                    'Kazordoon': null,
                    'Liberty Bay': null,
                    'Moonfall': null,
                    'Port Hope': null,
                    'Rathleton': null,
                    'Svargrond': null,
                    'Silvertides': null,
                    'Thais': null,
                    'Venore': null,
                    'Yalahar' : null
                },
                filterByTown: null,
                isBidded: false,
                hoursLeft: false,
                loader: 0
            }
        },

        methods: {
            checkServer: function() {
                let serverFree = this.serverFree,
                    serverBidded = this.serverBidded,
                    serverHoursLeft = this.serverHoursLeft;

                this.filterByTown = null;

                if (this.selectedServer) {
                    this.towns.forEach(town => { 
                        this.loader++;
                        axios
                            .get('https://api.tibiadata.com/v4/houses/' + this.selectedServer + '/' + town)
                            .then(response => {
                                serverFree[town] = response.data.houses.house_list.filter(a => a.rented !== true);
                                serverBidded[town] = response.data.houses.house_list.filter(a => a.rented !== true).filter(a => a.auction.time_left !== '');
                                serverHoursLeft[town] = response.data.houses.house_list.filter(a => a.rented !== true).filter(a => a.auction.time_left.match(/hours/));

                                this.loader--;
                            })
                    });
                }

                this.isBidded = false;
                this.server = serverFree;
            },
            filter: function(town) {
                if (town === this.filterByTown) {
                    this.filterByTown = null;
                } else {
                    this.filterByTown = town;
                }
            },
            showBidded: function() {
                this.hoursLeft = false;
                this.isBidded = !this.isBidded;

                if (this.isBidded) {
                    this.server = this.serverBidded;
                } else {
                    this.server = this.serverFree;
                }
            },
            showHours: function() {
                this.isBidded = false;
                this.hoursLeft = !this.hoursLeft;

                if  (this.hoursLeft) {
                    this.server = this.serverHoursLeft;
                } else {
                    this.server = this.serverFree;
                }
            },
            formatNumber: function (number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>

