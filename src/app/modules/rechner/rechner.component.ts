import { Component } from '@angular/core';

export interface KoordKosten {
  feld: number;
  kosten: number;
  komplex: number;
}

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.component.html',
  styleUrls: ['./rechner.component.scss']
})
export class RechnerComponent {
  //---------Class Members---------- 
  //--------------------------------
  // --------Data Domain------------
  data_domain_map = new Map([[1, [new Array(3)]], [2, [new Array(3)]]]);
  daten_domains_arr = new Array(2);
  data_sets_arr = new Array(1);
  variables_arr = new Array(3);
  data_domain_id: number = 1;
  variables_data_domain_map = new Map(
    [["1.1.1", 0], ["1.1.2", 0], ["1.1.3", 0],
    ["2.1.1", 0], ["2.1.2", 0], ["2.1.3", 0]]);

  // -------Amalyse-----------------
  analysen_map = new Map([[1, new Array(3)]]);
  analysen_arr = new Array(1);
  algorithms_arr = new Array(3);
  analysen_id: number = 1;
  // AN# AL#
  variables_analysen_map = new Map(
    [["1.1", 0], ["1.2", 0], ["1.3", 0]]);

  // --------Ergebnispräsentationen-----
  ep_map = new Map([[1, new Array(3)]]);
  ep_arr = new Array(1);
  pm_arr = new Array(3);
  ep_id: number = 1;
  // EP#1 PM#1
  variables_present_map = new Map(
    [["1.1", 0], ["1.2", 0], ["1.3", 0]]);

  //------------Height Calculation------
  height = 550;
  buffer_height = 0;

  //------Total Sum--------------------
  displayedColumns: string[] = ["feld", "kosten", "komplex"];
  gesamt_arr: KoordKosten[] = [
    { feld: 1, kosten: 0, komplex: 0 },
    { feld: 2, kosten: 0, komplex: 0 },
    { feld: 3, kosten: 0, komplex: 0 },
  ];
  //----------------------------------------
  //----------End Class Members-------------


  constructor() { console.log("----KOstruktor-------"); }

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
      ep_map.set(i, new Array(3));
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

  set_present_variable_numbers(buf_map: Map<any, any>) {
    let variables_present_map;
  }

  present_var(erg_present: number, present_modul: number, pm_preis: number) {
    let erg_present_variable_id = String(erg_present) + "." + String(present_modul);
    console.log("---present_var", erg_present_variable_id);
  }


  //------------------------------------------------------
  // -------Analyse---------------------------------------
  number_analysen(n_analysen: number) {
    this.height = n_analysen * 50;
    this.height += 290;
    this.buffer_height = this.height;
    //---------------------------------------------------
    this.analysen_arr.length = n_analysen;
    let analysen_map = new Map();
    let map_length = Number(n_analysen) + 1;
    for (let i = 1; i < map_length; i++) {
      analysen_map.set(i, new Array(3));
    }
    this.analysen_map = analysen_map;
    this.set_analysen_variable_numbers(this.analysen_map);
  }

  number_algorithms(analyse: number, n_algorithms: number) {
    this.height = this.buffer_height + Number(n_algorithms) * 70;
    this.analysen_id = analyse;
    let arr = this.analysen_map.get(analyse);
    n_algorithms = Number(n_algorithms);
    arr.length = n_algorithms;
    this.algorithms_arr.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {

      } else {
        arr[i] = new Array(2);
      }
    }
    this.analysen_map.set(analyse, arr);
    console.log("analysen_map", this.analysen_map);
    this.set_analysen_variable_numbers(this.analysen_map);
  }

  set_analysen_variable_numbers(buff_map: Map<any, any>) {
    let variables_analysen_map = new Map();
    let buff_string = "";
    let count_al = 0;
    for (let [key, value] of buff_map) {
      count_al = 0;
      for (let algorithm of value) {
        count_al++;
        buff_string = String(key) + "." + String(count_al);
        variables_analysen_map.set(buff_string, 0);
      }
    }
    this.variables_analysen_map = variables_analysen_map;
  }

  analysen_var(analysen_key: number, number_of_algorithms: number, al_preis: number) {
    let analyse_variable_id = String(analysen_key) + "." + String(number_of_algorithms);
    this.variables_analysen_map.set(analyse_variable_id, Number(al_preis));
    console.log("****variables_analysen_map ", this.variables_analysen_map);
  }

  analysen_sum_kosten() {
    let sum = 0;
    for (let value of this.variables_analysen_map.values()) {
      sum += value;
    }
    this.gesamt_arr[1].kosten = sum;
  }

  //----------------------------------------------------- 
  // --------Data Domain---------------------------------
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
    this.set_data_domain_variable_numbers(this.data_domain_map);
  }

  number_data_sets(data_domain: number, n_data_sets: number) {
    this.height = this.buffer_height + Number(n_data_sets) * 70;
    this.data_domain_id = data_domain;
    let arr = this.data_domain_map.get(data_domain);
    n_data_sets = Number(n_data_sets);
    arr.length = n_data_sets;
    this.data_sets_arr.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
      } else {
        arr[i] = new Array(3);
      }
    }
    this.data_domain_map.set(data_domain, arr);
    this.set_data_domain_variable_numbers(this.data_domain_map);
  }

  number_variables(n_domain: number, n_data_set: number, n_variables: number) {
    console.log("#domain", n_domain, "#n_data_set", n_data_set + 1, "kol_vo_variables", n_variables);
    let arr = this.data_domain_map.get(n_domain);
    arr[n_data_set] = new Array(Number(n_variables));
    //console.log("final array", arr);
    this.data_domain_map.set(n_domain, arr)
    console.log("data_set_map", this.data_domain_map);
    this.set_data_domain_variable_numbers(this.data_domain_map);
  }


  checkbox_analysen(analyse: number, algorithm: number, variable: number, event: any) {
    console.log("analyse_id=", analyse, "algorithmus_id=", algorithm, "var_id=", variable, "is checked=", event.checked);
  }

  set_data_domain_variable_numbers(buff_map: Map<any, any>) {
    let variables_data_domain_map = new Map();
    let buff_string = "";
    let count_ds = 0, count_var = 0;
    for (let [key, value] of buff_map) {
      count_ds = 0, count_var = 0;
      for (let data_set of value) {
        count_ds++; count_var = 0;
        for (let variable of data_set) {
          count_var++;
          buff_string = String(key) + "." + String(count_ds) + "." + String(count_var);
          variables_data_domain_map.set(buff_string, 0);
        }
      }
    }
    this.variables_data_domain_map = variables_data_domain_map;
    //console.log("--", this.variables_data_domain_map);
  }

  data_domain_var(daten_domain: number, data_set: number, variable: number, dd_value: number) {
    let domain_variable_id = String(daten_domain) + "." + String(data_set) + "." + String(variable);
    this.variables_data_domain_map.set(domain_variable_id, Number(dd_value));
  }

  data_domain_sum_kosten() {
    let sum = 0;
    for (let value of this.variables_data_domain_map.values()) {
      sum += value;
    }
    this.gesamt_arr[0].kosten = sum;
  }

  //------------------------------------------------
  //------Total Sum--------------------------------- 
  getTotalCost() {
    return this.gesamt_arr.map(t => t.kosten).reduce((acc, value) => acc + value, 0);
  }

  getTotalKomplex() {
    return this.gesamt_arr.map(t => t.komplex).reduce((acc, value) => acc + value, 0);
  }

}
