import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadatoComponent } from './metadato.component';

describe('MetadatoComponent', () => {
  let component: MetadatoComponent;
  let fixture: ComponentFixture<MetadatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
