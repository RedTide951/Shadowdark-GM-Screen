import React from "react";
import { Card, Typography, List, ListItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const InitiativeTracker = () => {
  // Sample data for list items
  const [items, setItems] = useState([
    { id: "1", content: "Character 1" },
    { id: "2", content: "Character 2" },
    { id: "3", content: "Character 3" },
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the list, do nothing
    if (!destination) return;

    // Rearrange the items array
    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, movedItem);

    setItems(newItems);
  };

  return (
    <Card className="cardClass">
      <Grid container spacing={1} style={{ height: "100%", width: "100%" }}>
        <Grid item xs={12}>
          <Typography variant="h4" className="cardTitle">
            INITIATIVE TRACKER
          </Typography>
        </Grid>

        {/* DragDropContext to manage drag events */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable-list">
            {(provided) => (
              <List
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: "100%" }}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          display: "block", // Override default flex display of ListItem
                          userSelect: "none",
                          padding: "16px",
                          marginBottom: "8px",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "4px",
                          cursor: "pointer", // Makes it clear it's draggable
                        }}
                      >
                        <Typography variant="body1">{item.content}</Typography>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
    </Card>
  );
};

export default InitiativeTracker;