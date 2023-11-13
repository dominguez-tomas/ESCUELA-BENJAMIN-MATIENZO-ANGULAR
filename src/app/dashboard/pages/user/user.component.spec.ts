import { TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserTableComponent } from './components/user-table/user-table.component' 

describe('UserComponent', () => {
    let userComponent: UserComponent;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [UserComponent, UserTableComponent],
        imports: [SharedModule, HttpClientTestingModule],
      });
      const fixture = TestBed.createComponent(UserComponent)
      userComponent = fixture.componentInstance;
    })
    it('tiene que crear un USER COMPONENT', () => {
        expect(userComponent).toBeTruthy();
      })
}); 