import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TalenthuntComponent } from './talenthunt.component';

describe('TalenthuntComponent', () => {
  let component: TalenthuntComponent;
  let fixture: ComponentFixture<TalenthuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalenthuntComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TalenthuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
