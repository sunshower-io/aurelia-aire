import {FrameworkConfiguration} from 'aurelia-framework';
import {EventAggregator} from "aurelia-event-aggregator";

export function configure(config: FrameworkConfiguration) {
    let aurelia = config.aurelia,
        container = aurelia.container;
    
    // config.postTask(t => {
    //     let service = container.get(SecurityService),
    //         authManager = new AuthenticationManager(service);
    //     container.registerInstance(AuthenticationManager, authManager);
    //     Events.setEventAggregator(container.get(EventAggregator));
    // });
    
    
    
    config.globalResources([

    ]);
}
