import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmosGeneratorComponent } from './arithmos-generator.component';

describe('ArithmosGeneratorComponent', () => {
  let component: ArithmosGeneratorComponent;
  let fixture: ComponentFixture<ArithmosGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArithmosGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmosGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
