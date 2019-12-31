import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycartComponent } from './mycart.component';

describe('MycartComponent', () => {
  let component: MycartComponent;
  let fixture: ComponentFixture<MycartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
