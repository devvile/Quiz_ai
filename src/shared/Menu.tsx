import { Drawer, ListItem, Typography , List} from "@mui/material";

const Menu = () => {
  return <Drawer variant="permanent">
    <Typography variant="body1">Menu</Typography>
    <List>
        <ListItem>
            New Quiz
        </ListItem>
    </List>
  </Drawer>
};

export default Menu;
