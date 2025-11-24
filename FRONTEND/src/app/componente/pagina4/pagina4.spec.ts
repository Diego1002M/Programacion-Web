import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagina4 } from './pagina4';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Pagina4', () => {
  let component: Pagina4;
  let fixture: ComponentFixture<Pagina4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Pagina4]
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create page', () => {
    expect(component).toBeTruthy();
  });
});
