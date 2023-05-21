import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { MyCompComponent } from "./components/my-comp/my-comp.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterOutlet, MyCompComponent]
})
export class AppComponent {

  a = signal(10);
  b = signal(20);
  c = computed(() => this.a() + this.b());

  club = signal('City');
  town = signal('Manchester');
  team = computed(() => `${this.town()} ${this.club()}`);

  i$ = interval(2000);
  i = toSignal(this.i$, {initialValue: -1});

  // a$ = new BehaviorSubject(10);
  // b$ = new BehaviorSubject(20);

  // club$ = new BehaviorSubject('City');
  // town$ = new BehaviorSubject('Manchester');

  // c$ = combineLatest([this.a$, this.b$]).pipe(
  //   map(([a, b]) => a + b)
  // );

  // footballTeam$ = combineLatest([this.club$, this.town$]).pipe(
  //   map(([c, t]) => `${t} ${c}`), 
  //   debounceTime(0)
  // );

  constructor(private changeDetector: ChangeDetectorRef) {
    // setInterval(() => this.a$.next(this.a$.value + 1), 1000);
    // setInterval(() => this.b$.next(this.b$.value + 1), 2500);

    setInterval(() => this.a.update(val => val + 1), 1000);
    setInterval(() => this.b.update(val => val + 1), 1500);

    // this.footballTeam$.subscribe(name => console.log('Football team name = ', name));

    effect(() => {
      console.log('Team name = ', this.team());
    });

  }

  changeTeamName() {
    this.club.set('United');
    this.town.set('Leads');
  }



}
