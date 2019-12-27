import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TalenthuntuploadComponent } from './talenthuntupload.component';

describe('TalenthuntuploadComponent', () => {
  let component: TalenthuntuploadComponent;
  let fixture: ComponentFixture<TalenthuntuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalenthuntuploadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TalenthuntuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
