/* global Vue, axios */

Vue.component('member', {
    template:
        `<div v-bind:class="{ 'text-success': green, 'text-warning': orange, 'text-danger': red }" class="row border-bottom pb-1 mb-1">
            <div v-html="rank" class="col-2"></div>
            <div class="col-3">
                <a v-bind:href="href" v-html="member.name" target="_blank"></a>
            </div>
            <div v-html="vocation" class="col-2"></div>
            <div v-html="level" class="col-1"></div>
            <div v-html="last" class="col-2"></div>
            <div v-html="days" class="col-2"></div>
        </div>`,

    props: ['member', 'rank'],

    data: function () {
        return {
            last: null,
            name: null,
            level: null,
            vocation: null,
            days: null,
            today: null,
            href: null,
            red: false,
            green: false,
            orange: false
        }
    },

    mounted: function () {
        this.name = this.member.name;
        this.level = this.member.level;
        this.href = "https://www.tibia.com/community/?subtopic=characters&name=" + this.name.replace(' ', '+');

        if (this.member.vocation.indexOf("Druid") != -1) {
            this.vocation = 'ED';
        }

        if (this.member.vocation.indexOf("Knight") != -1) {
            this.vocation = 'EK';
        }

        if (this.member.vocation.indexOf("Paladin") != -1) {
            this.vocation = 'RP';
        }

        if (this.member.vocation.indexOf("Sorcerer") != -1) {
            this.vocation = 'MS';
        }


        function formatDate(date) {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) {
                month = '0' + month;
            }

            if (day.length < 2) {
                day = '0' + day;
            }

            return [year, month, day].join('-');
        }

        this.today = formatDate(new Date());

        axios
            .get('https://api.tibiadata.com/v2/characters/' + this.name.replace(' ', '+') + '.json')
            .then(response => {
                this.last = response.data.characters.data.last_login[0].date.substring(0, 10);
                this.days = (new Date(this.today) - new Date(this.last)) / (1000 * 60 * 60 * 24);

                if (this.days > 13) {
                    this.red = true;
                } else if (this.days > 6) {
                    this.orange = true;
                } else {
                    this.green = true;
                }
            })
    }
});

var app = new Vue({
    el: '#app',

    template:
        `<div class="container">
            <h1 class="mt-3 mb-3">Check guild!</h1>
            <form v-on:submit.prevent="check" class="d-block">
                <div class="row">
                    <div class="col-md-9">
                        <input v-model="guildName" placeholder="Guild name" class="form-control form-control-lg">
                        <small>Case sensitivity.</small>
                    </div>
                    <div class="col-md-3">
                        <button v-on:click="check" type="button" class="btn btn-lg btn-outline-primary btn-block mt-3 mt-md-0">Submit</button>
                    </div>
                </div>
            </form>
            <div v-show="guild">
                <div class="mt-3 mb-3">
                    <strong>Filter:</strong>
                    <span class="badge bg-secondary" v-bind:class="{ 'bg-success': ed }" v-on:click="filter('ed')">Druid</span>
                    <span class="badge bg-secondary" v-bind:class="{ 'bg-info': ek }" v-on:click="filter('ek')">Knight</span>
                    <span class="badge bg-secondary" v-bind:class="{ 'bg-warning': rp }" v-on:click="filter('rp')">Paladin</span>
                    <span class="badge bg-secondary" v-bind:class="{ 'bg-danger': ms }" v-on:click="filter('ms')">Sorcerer</span>
                    <strong class="ml-3">Share:</strong>
                    <input type="number" v-model="share">
                </div>
                <div class="mt-3 mb-3">
                    <div class="row">
                        <div class="col-2"><strong>Rank</strong></div>
                        <div class="col-3"><strong>Name</strong></div>
                        <div class="col-2"><strong>Vocation</strong></div>
                        <div class="col-1"><strong>Lvl</strong></div>
                        <div class="col-2"><strong>Last login</strong></div>
                        <div class="col-2"><strong>Days from last login</strong></div>
                    </div>
                    <template v-for="rank in guild">
                        <template v-for="character in rank.characters">
                            <member :member="character" :rank="rank.rank_title" v-show="(all || filterMember(character.vocation)) && shareExp(character.level)"></member>
                        </template>
                    </template>
                </div>
            </div>
        </div>`,
  
    data: {
        guildName: '',
        guild: null,
        ed: false,
        ek: false,
        rp: false,
        ms: false,
        all: true,
        share: 0
    },

    methods: {
        check: function () {
            this.guild = null;
            
            if (this.guildName.length > 2) {
                axios
                    .get('https://api.tibiadata.com/v2/guild/' + this.guildName.replace(' ', '+') + '.json')
                    .then(response => {
                        this.guild = response.data.guild.members;

                        if (response.data.guild.error) {
                            alert(response.data.guild.error);
                        }
                    })
            }
        },
        filter: function (vocation) {
            switch (vocation) {
                case 'ed':
                    this.ed = !this.ed;
                    this.ek = false;
                    this.rp = false;
                    this.ms = false;
                    this.all = !this.ed;
                    break;
                case 'ek':
                    this.ed = false;
                    this.ek = !this.ek;
                    this.rp = false;
                    this.ms = false;
                    this.all = !this.ek;
                    break;
                case 'rp':
                    this.ed = false;
                    this.ek = false;
                    this.rp = !this.rp;
                    this.ms = false;
                    this.all = !this.rp;
                    break;
                case 'ms':
                    this.ed = false;
                    this.ek = false;
                    this.rp = false;
                    this.ms = !this.ms;
                    this.all = !this.ms;
                    break;
            }
        },
        filterMember: function (vocation) {
            if (this.ed && vocation.indexOf("Druid") != -1) {
                return true;
            }

            if (this.ek && vocation.indexOf("Knight") != -1) {
                return true;
            }

            if (this.rp && vocation.indexOf("Paladin") != -1) {
                return true;
            }

            if (this.ms && vocation.indexOf("Sorcerer") != -1) {
                return true;
            }

            return false;
        },
        shareExp: function (level) {
            if (this.share > 0) {
                if (level >= Math.floor(this.share * (2 / 3)) && level <= Math.floor(this.share * (3 / 2)) + 1) {
                    return true;
                } else {
                    return false;
                }
            }

            return true;
        }
    },
})
