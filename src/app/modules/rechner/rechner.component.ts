import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.component.html',
  styleUrls: ['./rechner.component.scss']
})
export class RechnerComponent {
  daten_domains_arr = new Array(2);
  data_sets_arr = new Array(1);
  variables_arr = new Array(1);
  data_domain_id: number = 1; 
  //{"# of data domain", "number of data sets in this data domain"}
  // new Map([[1, Map([[Array_data_set(1), Array_variables(1)],..]),..])
  data_domain_map = new Map([[1, [new Array(3)]], [2, [new Array(3)]]]);

  constructor() { }


  number_data_domains(n_data_domains: number) {
    this.daten_domains_arr.length = n_data_domains;
    let data_domain_map = new Map();
    let map_length = Number(n_data_domains) + 1;
    for (let i = 1; i < map_length; i++) {
      //data_domain_map.set(i, Array(1).fill(3));
       data_domain_map.set(i, [new Array(3)]);
    }
    this.data_domain_map = data_domain_map;
    console.log("(function number_data_domain) data_domain map", this.data_domain_map);
  }

  number_data_sets(data_domain: number, n_data_sets: number) {
    console.log("#data_domain", data_domain, "kolvo data sets", n_data_sets);
    this.data_domain_id = data_domain;
    let arr = this.data_domain_map.get(data_domain);
    console.log("arr", arr);
    n_data_sets =  Number(n_data_sets);
    arr.length = n_data_sets;
    this.data_sets_arr.length = arr.length;
    console.log("data_sets_arr.length", this.data_sets_arr.length);
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]) {
         console.log("i", i, "arr[i]", arr[i]);
       } else {
         arr[i] = new Array(3);
         console.log("arr[i]", i, "arr[i]", arr[i]);
       }
    }
    this.data_domain_map.set(data_domain, arr);
    console.log("data_set_map", this.data_domain_map);
    /*
    this.data_sets_arr.length = n_data_sets;
    let arr = new Array();
    arr.length = n_data_sets;
    arr.fill(3);
    this.data_domain_map.set(data_domain, arr);
    console.log("data_set_map", this.data_domain_map);
    */
  }

  number_variables(n_domain: number, n_data_set: number, n_variables: number) {
    console.log("#domain", n_domain, "#n_data_set", n_data_set+1, "kol_vo_variables", n_variables);
    console.log("data_set_map",  this.data_domain_map);
    // let arr = this.data_domain_map[n_domain];
    let arr = this.data_domain_map.get(n_domain);
    console.log("array in variables", arr);
    // arr.length = n_data_set;
    console.log("change length of arr to", arr.length);
    // arr[n_data_set] = Number(n_variables);
    arr[n_data_set] = new Array(Number(n_variables));
    //arr = arr.fill(n_variables)
    console.log("final array", arr);
    this.data_domain_map.set(n_domain, arr)
    console.log("data_set_map_new",  this.data_domain_map);
    // this.variables_arr.length = n_variables;
  }

  track_domain_key(index: any, daten_domain: any) {
       return index;   
  } 

}
