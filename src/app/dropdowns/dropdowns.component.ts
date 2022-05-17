import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  group: FormGroup;
  heroes: { [key: string]: string[] } = {
    'Batman': ['utility belt', 'bat-mobile', 'baterang'],
    'Superman': ['flight', 'x-ray vision', 'strength'],
    'Wolverine': ['claws', 'regeneration'],
  }
  knownHeroes: string[];

  constructor(private fb: FormBuilder) {
    this.group = this.fb.group({
      Hero: [null],
      Power: [null],
    });
    this.knownHeroes = [];
    for (let hero in this.heroes) {
      this.knownHeroes.push(hero)
    }
  }

  ngOnInit(): void {
  }

  getPowers():string[]{
    return this.heroes[this.group.controls["Hero"].value];
  }
}
