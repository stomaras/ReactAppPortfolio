import React from "react";

import "./App.css";
// import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextField";
import { MuiSelect } from "./components/MuiSelect";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiRating } from "./components/MuiRating";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiLayout } from "./components/MuiLayout";
// import { MuiTypography } from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField />
      <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      <MuiLayout />
    </div>
  );
}

export default App;

/*
/*
Material UI is a component Library 
Provides us with components tyo build awesome user interfasces 
Install MUI in react application
Typography
Components 
- Input/Forms Controls
- Layout
- Navigatgion
- Data Display and feedback
- MUI Lab
MUI Customization

React Material UI Tutorial -3- Typography 

body1 is the default value of the variant prop in Typography component 
body 1 and body2 are rendered as paragraphs html elements 
there are default theme for Typography props

Larger variants has more margin than smaller variants

----------------------------------------------------------------------------React Material UI - 4 - Button--------------------------------------------------------------------------------------
in material ui buttons are basically native button or anchor elements enhanced with material design 

text variance used when you want to grab less attentuion on the UI for example in a card footer on in confiramtion pop up
contained variance used when you want to grab the users attention and is used for primary actions in your application for example register or login button
outlined variance is something between text and contained , they can used for secondary actions in your application an example could be the cancel or go back buttons

we are going to import a component called stack which material ui provides for exactly the use case we have 

<Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

There are six categories of colors 

 <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
For smaller or larger buttons you can use the size prop 
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>

Material ui has icons library with close to 2000 icons that we can use 

npm install @mui/icons-material

IN order to create buttons only with icons and not text mui provides a component called icon button component 

Icon Buttons are more appropriate for navigsatyion bars

---------------------------------------------------------React Material UI Tutorial - 5 - Button Group-------------------------------------------------------------------------------------------

- Button Group Component is used for groups buttons

When yoyu use ButtonGroup component the variance is going to be specified in button group and not on the individual buttons

 <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="aligment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
</ButtonGroup>

-------------------------------------------------------React Material UI Tutorial - 6 - Toggle Button-----------------------------------------------------------------------------------------

Let's see some cosmetic props which may be useful 
on toggleButtonGroup you can specify size is equal to small medium or large 
and color is equal to success 

final prop i want to showcase is the eclusive prop which ensures you can select only one option at a time 
so the user can format the text either in bold or italic or undelined
exlusive prop

------------------------------------------------------React Material UI Tutorial - 7 - Text Field---------------------------------------------------------------------------------------------

Text fields allows user to enter text on the browser , for exampkle text-fileds in user registration form 

in TextField component we have three variance and outlined is the default variant 

 <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
<TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
/>

Adornments acts as prefixes and suffixes

if you specify the error prop back in the browser 
the helper text prop can be used to feed back validation messages to the user
there are also value prop and onChange prop


TextField Component and its props

<TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={
            !value ? "Required" : "Do not share the password with anyone"
          }
/>

-----------------------------------------------------------------------------React Material UI Tutorial - 8 - Select ----------------------------------------------------------------------------
select component is used for collecting informastion from a list of options 

Box is a plain old div tag on which we can specify some css properties like height and width

TextField component is a wrapper around three other components of which select is one of them , so import TextField
we import MenuItem component because the select need options, which provided by MenuItem Component 

select -> options -> from MenuItem Component 

we create a select item component
<Box width="250px">
      <TextField label="Select Country" select>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
</Box>

A more practical usage of this component will propably involve of fetching the list of drop-down options from an api and populate the list
for that make use of map operator 

-----------------------------------------------------------------------React Material UI Tutorial - 9 - Radio Button----------------------------------------------------------------------------
Radio Buttons allows the user to select one option from a set 
We need to import FormControl Component which is the wrapper component , 
also we make use of FormLabel component which specify the label for group of radio buttons


<Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>

------------------------------------------------------------------------------React Material UI Tutorial - 10 - Checkbox-------------------------------------------------------------------------

Checkboxes allow the user to select one or more options from a set , they can also be used to turn an option on or off

    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox />}
        />
      </Box>
    </Box>
  
Track the status in a state variable 

<Box>
        <Checkbox
          icon={<BookMarkBorderIcon />}
          checkedIcon={<BookMarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

Let's see how to work with Checkbox group
to use Checkbox group we need three more components 
1) FormControl
2) FormLabel
3) FormGroup 

From Material UI

return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookMarkBorderIcon />}
          checkedIcon={<BookMarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="CSS"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  value="Javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );

  -----------------------------------------------------------------React Material UI Tutorial - 11 - Switch---------------------------------------------------------------------

  export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};

if you want to use group o switches check on the previous video

----------------------------------------------------------------------------React Material UI - 12 - Rating--------------------------------------------------------------------------

import React from "react";
import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

-----------------------------------------------------------------------------------------React Material UI - 13 - Autocomplete-------------------------------------------------------------


type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });
  return (
    <Stack spacing={2} width="250">
      <Autocomplete
        options={skills}
        value={value}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        value={skill}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};


-----------------------------------------------------------------------React Material UI 14 Box--------------------------------------------------------------------------------------------------


Box component serves as a wrapper component for most of your css utility needs
it could be a section tag article tag etc
a box component accepts prop 
span
with sx property you have access to the theme

you can use a lot of css properties dirtectly on the component 

------------------------------------------------------------------React Material UI 15 Stack-------------------------------------------------------------------------------------------------


The stack component is used to manage layout in one dimension either alng the vertical or horizontal access 
for stack display flex and flex-direction column is the default styler

Stack is used for one dimenstional layout











*/
