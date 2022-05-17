import { ComponentFixture} from '@angular/core/testing';
import { DropdownsComponent } from './dropdowns.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {screen, render} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

describe('DropdownsComponent', () => {
  let fixture: ComponentFixture<DropdownsComponent>;

  beforeEach(async () => {
    ({fixture} = await render(DropdownsComponent, {
      declarations: [ DropdownsComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [FormBuilder]}));
  });
  afterEach(() => {
    fixture.componentRef.destroy();
    fixture.destroy();
  })

  it('should create', async () => {
    const heroSelect = screen.getByRole('combobox', {name: 'Hero'});
    await userEvent.selectOptions(heroSelect, 'Batman');
    const powerSelect = screen.getByRole('combobox', {name: 'Power'});
    await userEvent.selectOptions(powerSelect, 'utility belt');
  });
});
