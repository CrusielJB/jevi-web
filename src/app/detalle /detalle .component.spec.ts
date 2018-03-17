/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Detalle Component } from './detalle .component';

describe('Detalle Component', () => {
  let component: Detalle Component;
  let fixture: ComponentFixture<Detalle Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detalle Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalle Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
