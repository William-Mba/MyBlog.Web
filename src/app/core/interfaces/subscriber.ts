import { SimpleChanges } from "@angular/core";
import { Unsubscribable } from "rxjs";

export interface Subscriber {
    event: Event,
    subscription: Unsubscribable,
    notify(changes: SimpleChanges): void
}
