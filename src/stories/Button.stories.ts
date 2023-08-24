import type { Meta, StoryObj } from '@storybook/react';

import {Button} from '../components/Buttons'


const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `// Button
import { Button , Fab } from "@mui/material";

<Button
  variant={variant}
  disabled={disabled}
  color={color}
  size={size}
  startIcon={icon && <DeleteIcon />}
  disableElevation
>
  {label}
</Button>

// Button Group

import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

<ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
  <Button onClick={handleClick}>{options[selectedIndex]}</Button>
  <Button
    size="small"
    aria-controls={open ? 'split-button-menu' : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-label="select merge strategy"
    aria-haspopup="menu"
    onClick={handleToggle}
  >
    <ArrowDropDownIcon />
  </Button>
</ButtonGroup>
<Popper
  sx={{
    zIndex: 1,
  }}
  open={open}
  anchorEl={anchorRef.current}
  role={undefined}
  transition
  disablePortal
>
  {({ TransitionProps }) => (
    <Grow
      {...TransitionProps}
      style={{
        transformOrigin: 'center top' ,
      }}
    >
      <Paper>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList id="split-button-menu" autoFocusItem>
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 2}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Grow>
  )}
</Popper>`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary','secondary', 'error', 'success', 'warning']},
    variant: { control: 'radio', options: ['text', 'outlined','contained']},
    type: { control: 'select', options: ['default', 'add','group']},
    icon : {control: 'boolean'},
    iconType: {control : 'select' , if : {arg: 'icon'} , option: ['delete' , 'copy']}
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary',
    type: 'default'
  },
};

export const Warning: Story = {
  args: {
    label: 'Validate',
    variant: 'outlined',
    color: 'warning',
    type: 'default'
  },
};

export const Error: Story = {
  args: {
    label: 'Reject',
    variant: 'outlined',
    color: 'error',
    type: 'default'
  },
};

export const Add: Story = {
  args: {
    label: 'Add New',
    color: 'primary',
    type: 'add'
  },
};

export const Delete: Story = {
  args: {
    label: 'Delete',
    color: 'error',
    variant: 'outlined',
    type: 'default',
    icon : true
  },
};

export const Group: Story = {
  args: {
    label: 'Button Group',
    color: 'primary',
    type: 'group'
  },
  parameters: {
    controls: { exclude: ['type'] },
  },
};

