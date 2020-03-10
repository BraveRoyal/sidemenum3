import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BancoDeDadosPage } from './banco-de-dados.page';

describe('BancoDeDadosPage', () => {
  let component: BancoDeDadosPage;
  let fixture: ComponentFixture<BancoDeDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoDeDadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BancoDeDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
