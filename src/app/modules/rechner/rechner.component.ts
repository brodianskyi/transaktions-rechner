import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.component.html',
  styleUrls: ['./rechner.component.scss']
})
export class RechnerComponent {
  daten_domains_arr = new Array(2);
  current_data_domain: number = 1;
  current_data_set: number = 1;
  current_variables: number = 1;
  data_sets_arr = new Array(1);
  variables_arr = new Array(1);
  //{"# of data domain", "number of data sets in this data domain"}
  // new Map([[1, Map([[Array_data_set(1), Array_variables(1)],..]),..])
  data_domain_map = new Map([[1, Array(1).fill(3)], [2, Array(1).fill(3)]]);

  constructor() { }


  number_data_domains(n_data_domains: number) {
    let data_domain_map = new Map();
    let map_length = Number(n_data_domains) + 1;
    for (let i = 1; i < map_length; i++) {
      data_domain_map.set(i, Array(1).fill(3));
    }
    this.data_domain_map = data_domain_map;
    console.log("(function number_data_domain) data_domain map", this.data_domain_map);
  }

  number_data_sets(data_domain: number, n_data_sets: number) {
    console.log("data_domain", data_domain, "number data sets", n_data_sets);
    let arr = new Array();
    arr.length = n_data_sets;
    // number of variables by default = 3
    arr.fill(3);
    this.data_domain_map.set(data_domain, arr);
    console.log("data_set_map", this.data_domain_map);
    //this.current_data_domain = data_domain;
    //this.data_sets_arr.length = n_data_sets;
  }

  number_variables(n_domain: number, n_data_set: number, n_variables: number) {
    console.log("n_domain", n_domain, "n_data_set", n_data_set, "n_variables", n_variables);
    let arr = this.data_domain_map[n_domain]
    console.log("array in variables", arr);
    arr.length = n_data_set;
    console.log("change length of arr", arr.length);
    arr = arr.fill(n_variables)
    console.log("final array", arr);
    this.data_domain_map.set(n_domain, arr)

    // this.variables_arr.length = n_variables;
  }



}
