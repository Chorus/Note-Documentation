---
id: Graphs
title: Graphs
---
# Graphs
You can see the graph of a target by clicking on a target in a care plan. Graphs enable the BCBA to visualize a learner’s progress through plotted data points.  

<img src="/img/TargetGraph.png" width="400" />

The Y axis labels change based on the form of measure and the X axis displays the dates. You can zoom in and out on the graph to control how many dates are being displayed and go back or forward in time by tapping and dragging your finger horizontally.  

The filter, in the top right corner, can be used to view data points collected by a specific provider on the graph. 

:::note
When there are multiple data points collected on the same day, for targets with a form of measure that scores as a percentage, or that measure the average duration/rate, the average of the scores will be plotted on the graph. For targets with a form of measure that scores as a count, or that measure the total duration, the sum of the scores will be plotted on the graph. 
:::

## Add Data to Graph

Data points can be added to the graph if the target is at an in-progress phase (Baseline, Active, or Maintenance).

1. Open a target.
2. Click Add data.
3. Enter the score and the date.
4. Click OK to save.

## Condition Changes

Condition change lines (dashed, vertical lines separating the data-paths on each side of the line) can be added to the graph if the target is at an in-progress phase (Baseline, Active, or Maintenance).

1. Open a target.
2. Click Add condition change.
3. Enter the label of the condition change and the date.
4. Click OK to save.

## Phase Changes

Phase change lines (solid, vertical lines separating the data-paths on each side of the line) are added to the graph automatically when a [target's phase is updated](../CarePlan/TargetPhases/#change-a-targets-phase). 

## Prompt Changes

Prompt change lines (dashed, vertical lines separating the data-paths on each side of the line) are added to the graph when the active prompt level for a target with [Across Session Prompt Fading](../CarePlan/FormsOfMeasure.md/#prompting-workflows) is faded. 

With autofade on, targets automatically advance to the next prompt level after the learner meets the minimum score (and the minimum trials were collected) for the set number of consecutive sessions.

If the final prompt level in the sequence is mastered, it will fade to Independent.

If you did not set your prompt levels to auto-fade, or would like to fade a prompt level before it has reached mastery criteria, you can change the active prompt level manually:
1. Open a target.
2. Click the 3 dots icon in the top right corner.
3. Click Fade prompt level.
4. Click Fade to confirm.

## Target History

Under the History tab, you can see all activity regarding the target:  

- Condition changes 
- Phase Changes
- Data points from sessions 
- Manually added data points 

Orange data points are considered incomplete, because the minimum trials configured for that target was not collected. Incomplete data points are not plotted on the graph.

You can select a data point from the history list to see additional details:

- Score
- Trial responses
- Date of session
- Provider

### See also
- [Activity Report](Reports/ActivityReport.md)
- [Care Team Management](Reports/CareTeamManagement.md)
