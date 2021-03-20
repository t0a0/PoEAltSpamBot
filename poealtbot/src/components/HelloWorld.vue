<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="input"
          placeholder="PoE Base Item"
          @keyup.enter.native="click()"
          solo
        />
      </v-col>
      <v-col cols="6">
        <v-list>
          <template v-for="item in prefixes">
            <v-list-item :key="item">
              <v-list-item-content>
                <v-list-item-title v-html="item"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col cols="6">
        <v-list>
          <template v-for="item in suffixes">
            <v-list-item :key="item">
              <v-list-item-content>
                <v-list-item-title v-html="item"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  baseItem,
  itemInfluenceTagData,
  influenceTags,
  rollableAffixes,
} from "@/parser/affix_finder";
// import { BaseItem } from "../model/BaseItem";
import { Influence } from "@/model/Influence";
import { affixTranslation } from "@/parser/affix_translator";
export default Vue.extend({
  name: "HelloWorld",

  methods: {
    click: function (event: KeyboardEvent) {
      const result = baseItem(this.input);
      console.log(result);
      if (result !== undefined) {
        const infTagData = itemInfluenceTagData(result);
        console.log(infTagData);
        if (infTagData !== undefined) {
          const influences: Influence[] = [
            Influence.Crusader,
            Influence.Redeemer,
          ];
          const infTags = influenceTags(influences, infTagData);
          console.log(infTags);
          const affixes = rollableAffixes(
            result.domain,
            result.tags.concat(infTags)
          );
          const translations = affixes.map(affixTranslation);
          const prefs: string[] = [];
          const suffs: string[] = [];
          affixes.forEach((v, i, a) => {
            if (v.generation_type == "prefix") {
              prefs.push(translations[i]);
            } else {
              suffs.push(translations[i]);
            }
          });
          this.prefixes = prefs;
          this.suffixes = suffs;
          console.log(this.prefixes);
          return;
        }
      }
      this.prefixes = [""];
      this.suffixes = [""];
    },
  },

  data: () => ({
    input: "",
    prefixes: [""],
    suffixes: [""],
  }),
});
</script>
