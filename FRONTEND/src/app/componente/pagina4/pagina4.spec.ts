import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina4 } from './pagina4';

describe('Pagina4', () => {
  let component: Pagina4;
  let fixture: ComponentFixture<Pagina4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
