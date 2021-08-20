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
              style="height: 50%;"
              color="#1F7087"
            >
              MIDDLE #{{ n }}
            </card>
            <card
              class="pa-3"
              outlined
              tile
              style="height: 50%;"
              color="#1F7087"
            >
              MIDDLE #{{ n }}
            </card>
          </v-col>
          <v-col cols="12" md="4" sm="4">
            <card
              class="pa-3"
              outlined
              tile
              style="height: 30%;"
              color="#1F7087"
            >
              a #{{ n }}
            </card>
            <card
              class="pa-3"
              outlined
              tile
              style="height: 70%;"
              color="#1F7087"
            >
              v #{{ n }}
            </card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
