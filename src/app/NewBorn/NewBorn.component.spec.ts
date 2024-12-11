/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewBornComponent } from './NewBorn.component';

describe('NewBornComponent', () => {
  let component: NewBornComponent;
  let fixture: ComponentFixture<NewBornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
