import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.component.html',
  styleUrls: ['./rechner.component.scss']
})
export class RechnerComponent {
  // --------Data Domain------------
  data_domain_map = new Map([[1, [new Array(3)]], [2, [new Array(3)]]]);
  daten_domains_arr = new Array(2);
  data_sets_arr = new Array(1);
  variables_arr = new Array(3);
  data_domain_id: number = 1;
  // -------Amalyse-----------------
  analysen_map = new Map([[1, new Array(3)]]);
  analysen_arr = new Array(1);
  algorithms_arr = new Array(3);
  variables_arr_anlysen =
    ["1.1.1", "1.1.2", "1.1.3",
      "2.1.1", "2.1.2", "2.1.3"];
  analysen_id: number = 1;
  // --------Ergebnispräsentationen-----
  ep_map = new Map([[1, new Array(2)]]);
  ep_arr = new Array(1);
  pm_arr = new Array(2);
  ep_id: number = 1;
  //---------------------------------------
  height = 350;
  buffer_height = 0;



  constructor() { }

  // --------Ergebnispräsentationen-----
  number_ep(n_ep: number) {
    console.log("kol_vo ep", n_ep);
    this.height = n_ep * 50;
    this.height += 290;
    this.buffer_height = this.height;
    this.ep_arr.length = n_ep;
    let ep_map = new Map();
    let map_length = Number(n_ep) + 1;
    for (let i = 1; i < map_length; i++) {
      ep_map.set(i, new Array(2));
    }
    this.ep_map = ep_map;
    console.log("(function number_ep) ep_map", this.ep_map);
  }

  number_pm(ep: number, n_pm: number) {
    this.height = this.buffer_height + Number(n_pm) * 70;
    this.ep_id = ep;
    let arr = this.ep_map.get(ep);
    n_pm = Number(n_pm);
    arr.length = n_pm;
    this.pm_arr.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {

      } else {
        arr[i] = new Array(2);
      }
    }
    this.ep_map.set(ep, arr);
    console.log("Ergeb_psentation_map", this.ep_map);
  }

  // -------Amalyse-----------------
  number_analysen(n_analysen: number) {
    //console.log("kol_vo analysen", n_analysen);
    this.height = n_analysen * 50;
    this.height += 290;
    this.buffer_height = this.height;
    this.analysen_arr.length = n_analysen;
    let analysen_map = new Map();
    let map_length = Number(n_analysen) + 1;
    for (let i = 1; i < map_length; i++) {
      analysen_map.set(i, new Array(3));
    }
    this.analysen_map = analysen_map;
    console.log("(function number_analysen) analysen_map", this.analysen_map);
  }

  number_algorithms(analyse: number, n_algorithms: number) {
    this.height = this.buffer_height + Number(n_algorithms) * 70;
    //console.log("#analyse", analyse, "kolvo algorithms", n_algorithms);
    this.analysen_id = analyse;
    let arr = this.analysen_map.get(analyse);
    //console.log("arr", arr);
    n_algorithms = Number(n_algorithms);
    arr.length = n_algorithms;
    this.algorithms_arr.length = arr.length;
    //console.log("algorithms_arr.length", this.algorithms_arr.length);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {

      } else {
        arr[i] = new Array(2);
      }
    }
    this.analysen_map.set(analyse, arr);
    console.log("analysen_map", this.analysen_map);
  }

  // --------Data Domain------------
  number_data_domains(n_data_domains: number) {
    this.height = n_data_domains * 50;
    this.height += 290;
    this.buffer_height = this.height;
    //----------------------------
    let buff_arr = new Array(3); 
    this.daten_domains_arr.length = n_data_domains;
    let data_domain_map = new Map();
    let map_length = Number(n_data_domains) + 1;
    for (let i = 1; i < map_length; i++) {
        data_domain_map.set(i, [buff_arr]);
    }
    this.data_domain_map = data_domain_map;
    this.set_variable_numbers(this.data_domain_map);
    // console.log("(function number_data_domain) data_domain map", this.data_domain_map);
  }

  // new Map([[1, [new Array(3)]], [2, [new Array(3)]]])
  set_variable_numbers(buff_map: Map<any, any>) {
    console.log("***********************************");
    let buff_arr = new Array();
    let count_ds = 0, count_var = 0;
    for (let [key, value] of buff_map) {
      count_ds = 0, count_var = 0;
      for (let data_set of value) {
        count_ds++; count_var = 0;
        for (let variable of data_set) {
          count_var++;
          //console.log(String(key)+"."+String(count_ds)+"."+String(count_var));
          buff_arr.push(String(key)+"."+String(count_ds)+"."+String(count_var));
          //variables_arr_anlysen.push(String(key+"."+i));   
        }
      }
    }
    this.variables_arr_anlysen = buff_arr;
    console.log("--", this.variables_arr_anlysen);
  }

  number_data_sets(data_domain: number, n_data_sets: number) {
    this.height = this.buffer_height + Number(n_data_sets) * 70;
    //console.log("--height", this.height);
    //console.log("#data_domain", data_domain, "kolvo data sets", n_data_sets);
    this.data_domain_id = data_domain;
    let arr = this.data_domain_map.get(data_domain);
    //console.log("arr", arr);
    n_data_sets = Number(n_data_sets);
    arr.length = n_data_sets;
    this.data_sets_arr.length = arr.length;
    //console.log("data_sets_arr.length", this.data_sets_arr.length);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        //console.log("i", i, "arr[i]", arr[i]);
      } else {
        arr[i] = new Array(3);
        //console.log("arr[i]", i, "arr[i]", arr[i]);
      }
    }
    this.data_domain_map.set(data_domain, arr);
    this.set_variable_numbers(this.data_domain_map);
    //console.log("data_set_map", this.data_domain_map);
  }

  number_variables(n_domain: number, n_data_set: number, n_variables: number) {
    console.log("#domain", n_domain, "#n_data_set", n_data_set + 1, "kol_vo_variables", n_variables);
    this.variables_arr
    //console.log("data_set_map",  this.data_domain_map);
    let arr = this.data_domain_map.get(n_domain);
    //console.log("array in variables", arr);
    //console.log("change length of arr to", arr.length);
    arr[n_data_set] = new Array(Number(n_variables));
    //console.log("final array", arr);
    this.data_domain_map.set(n_domain, arr)
    console.log("data_set_map", this.data_domain_map);
    this.set_variable_numbers(this.data_domain_map);
  }
  // event.checked
  checkbox_algorithms(analyse: number, algorithm: number, variable: number, event: any) {
    console.log("analyse_id=", analyse, "algorithmus_id=", algorithm, "var_id=", variable, "is checked=", event.checked);
  }

  data_domain_var(daten_domain: number, data_set: number, variable: number, dd_value: number) {
    //console.log("daten_domain = ", daten_domain, "data_set=", data_set, "variable_number", variable, "value", dd_value);
  }

  button_click(value: number) {
    console.log("lllll", value);
  }

  /*
  track_domain_key(index: any, daten_domain: any) {
    return index;
  }
   */
}
