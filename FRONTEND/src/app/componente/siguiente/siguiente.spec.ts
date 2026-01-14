import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiguienteComponent } from './siguiente';

describe('SiguienteComponent', () => {
  let component: SiguienteComponent;
  let fixture: ComponentFixture<SiguienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiguienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiguienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
