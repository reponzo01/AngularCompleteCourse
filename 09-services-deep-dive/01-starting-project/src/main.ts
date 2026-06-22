import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';

// This makes it so that you don't need the @Injectable decorator, but it is not recommended since it can't optimize the code bundle that's shipped.
// bootstrapApplication(AppComponent, {
//   providers: [TasksService]
// }).catch((err) => console.error(err));
bootstrapApplication(AppComponent).catch((err) => console.error(err));
