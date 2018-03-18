# Angular Study

## Databinding
### 1. String Interpolation ( {{ data }} )

```
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
}

...

<p>Server with ID {{serverId}} is {{serverStatus}} </p>

```
### 2. Property Binding ( [property]="data" )
```
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}

...

<button class="btn btn-primary" [disabled]="!allowNewServer">NewServer</button>

```
让[disabled] = allowNewServer，两秒后disableed设置为false

### 3. Event Binding ( (event)="expression" )
### 4. Combination of Both: Two-Way-Binding ( [(ngModel)]="data" )
