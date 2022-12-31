import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  it('Lanzadera Creada correctamente', () => {
    (<HTMLInputElement>document.getElementById('nombre')).value = 'Saturno Testing';
    (<HTMLInputElement>document.getElementById('pais')).value = 'Colombia';
    expect((<HTMLInputElement>document.getElementById('nombre')).value).toBe('Saturno Testing');    
   })
  

});
