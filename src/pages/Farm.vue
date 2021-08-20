<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <v-container fluid>
        <v-row dense style="height: 720px">
          <v-col cols="12" md="8" sm="8">
            <card
              class="pa-3"
              outlined
              tile
              style="height: 100%;"
              color="#1F7087"
            >
              <button v-on:click="send_mqtt">
                MQTTTest
              </button>
            </card>
          </v-col>
          <v-col cols="12" md="4" sm="4">
            <card
              class="pa-3"
              outlined
              tile
              style="height: 100%;"
              color="#1F7087"
            >
              <card :title="table0.title" :subTitle="table0.subTitle">
                <div class="table-responsive">
                  <paper-table :data="table0.data" :columns="table0.columns">
                  </paper-table>
                </div>
              </card>

              <card :title="table1.title" :subTitle="table1.subTitle">
                <div slot="raw-content" class="table-responsive">
                  <paper-table :data="table1.data" :columns="table1.columns">
                  </paper-table>
                </div>
              </card>

              <card :title="table2.title" :subTitle="table2.subTitle">
                <div slot="raw-content" class="table-responsive">
                  <paper-table :data="table2.data" :columns="table2.columns">
                  </paper-table>
                </div>
              </card>

              <card :title="table3.title" :subTitle="table3.subTitle">
                <div slot="raw-content" class="table-responsive">
                  <paper-table :data="table3.data" :columns="table3.columns">
                  </paper-table>
                </div>
              </card>

              <card :title="table4.title" :subTitle="table4.subTitle">
                <div slot="raw-content" class="table-responsive">
                  <paper-table :data="table4.data" :columns="table4.columns">
                  </paper-table>
                </div>
              </card>

              <card :title="table5.title" :subTitle="table5.subTitle">
                <div slot="raw-content" class="table-responsive">
                  <paper-table :data="table5.data" :columns="table5.columns">
                  </paper-table>
                </div>
              </card>
            </card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { PaperTable } from "@/components";
import axios from "axios";
import Button from "../components/Button.vue";
const tableColumns = ["id", "createtimestamp", "state", "value"];
const tableData = [];

export default {
  components: {
    PaperTable,
    Button
  },
  data() {
    return {
      pollInterval: null,
      table0: {
        title: "inji000_temp",
        subTitle: "마지막 업데이트: 방금 전",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table1: {
        title: "inji001_humi",
        subTitle: "마지막 업데이트: 방금 전",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "inji002_wind_direction",
        subTitle: "마지막 업데이트: 방금 전",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table3: {
        title: "inji003_wind_speed",
        subTitle: "마지막 업데이트: 방금 전",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table4: {
        title: "inji004_soilt",
        subTitle: "마지막 업데이트: 방금 전",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table5: {
        title: "inji005_soilh",
        subTitle: "마지막 업데이트: 방금 전",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  },
  methods: {
    send_mqtt: function() {
      window.console.log("send send d");
      axios
        .post("http://localhost:8080/smartfarm-1.0.0/mqtt/message", "d")
        .then(response => {
          window.console.log(response);
        })
        .catch(error => window.console.log(error));
    },
    getDatas: function() {
      // axios
      //   .get("http://localhost:8080/smartfarm-1.0.0/login")
      //   .then(response => {
      //     window.console.log(response);
      //   })
      //   .catch(error => window.console.log(error));

      axios
        .get("http://localhost:8080/smartfarm-1.0.0/api/temp")
        .then(response => {
          var vv = JSON.stringify(response.data).replace(
            /"([^"]+)":/g,
            function($0, $1) {
              return '"' + $1.toLowerCase() + '":';
            }
          );
          this.patch("temp", JSON.parse(vv));
        })
        .catch(error => window.console.log(error));

      axios
        .get("http://localhost:8080/smartfarm-1.0.0/api/humi")
        .then(response => {
          var vv = JSON.stringify(response.data).replace(
            /"([^"]+)":/g,
            function($0, $1) {
              return '"' + $1.toLowerCase() + '":';
            }
          );
          this.patch("humi", JSON.parse(vv));
        })
        .catch(error => window.console.log(error));

      axios
        .get("http://localhost:8080/smartfarm-1.0.0/api/windd")
        .then(response => {
          var vv = JSON.stringify(response.data).replace(
            /"([^"]+)":/g,
            function($0, $1) {
              return '"' + $1.toLowerCase() + '":';
            }
          );
          this.patch("windd", JSON.parse(vv));
        })
        .catch(error => window.console.log(error));

      axios
        .get("http://localhost:8080/smartfarm-1.0.0/api/winds")
        .then(response => {
          var vv = JSON.stringify(response.data).replace(
            /"([^"]+)":/g,
            function($0, $1) {
              return '"' + $1.toLowerCase() + '":';
            }
          );
          this.patch("winds", JSON.parse(vv));
        })
        .catch(error => window.console.log(error));

      axios
        .get("http://localhost:8080/smartfarm-1.0.0/api/soilt")
        .then(response => {
          var vv = JSON.stringify(response.data).replace(
            /"([^"]+)":/g,
            function($0, $1) {
              return '"' + $1.toLowerCase() + '":';
            }
          );
          this.patch("soilt", JSON.parse(vv));
        })
        .catch(error => window.console.log(error));

      axios
        .get("http://localhost:8080/smartfarm-1.0.0/api/soilh")
        .then(response => {
          var vv = JSON.stringify(response.data).replace(
            /"([^"]+)":/g,
            function($0, $1) {
              return '"' + $1.toLowerCase() + '":';
            }
          );
          this.patch("soilh", JSON.parse(vv));
        })
        .catch(error => window.console.log(error));
    },
    patch: function(table, data) {
      switch (table) {
        case "temp":
          this.table0.data = data;
          break;
        case "humi":
          this.table1.data = data;
          break;
        case "windd":
          this.table2.data = data;
          break;
        case "winds":
          this.table3.data = data;
          break;
        case "soilt":
          this.table4.data = data;
          break;
        case "soilh":
          this.table5.data = data;
          break;
      }
    }
  },
  // mounted() {
  //   this.getDatas()
  //   //check if the status is completed, if not fetch data every 10minutes
  //   this.pollInterval = setInterval(this.getDatas(), 1000) //save reference to the interval
  //   setTimeout(() => {clearInterval(this.pollInterval)}, 36000000) //stop polling after an hour
  // }
  mounted: function() {
    this.getDatas();

    this.pollInterval = setInterval(
      function() {
        this.getDatas();
      }.bind(this),
      5000
    );
  },

  beforeDestroy: function() {
    clearInterval(this.pollInterval);
  }
};
</script>
