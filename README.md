# Crossmint Challenge

### Install

```yarn install```

### Run Scripts

1) `yarn populate-phase-1`
2) `yarn populate-phase-2`
3) `yarn delete-phase-1`
4) `yarn delete-phase-2`
   
   
### Decisions made

- I installed the `axios-retry` library to handle retries if any API call fails. In case of three consecutive failures, the error is logged, and the error is thrown. However, this could change depending on the business logic. For example, if an update or delete operation fails, it might not take any action and not throw the error upwards.

- I chose to use a basic TypeScript project where scripts are run to populate and eliminate the different phases since there was no need to visualize the multiverses or generate a service or API. I believe this approach made the solution much neater, cleaner, and understandable regarding its purpose.

- I added a delay to each API call to prevent it from failing due to the "Too Many Requests" error. This delay could be configured differently if more information about the API's call limit was available. For now, I set it to 1 second. 