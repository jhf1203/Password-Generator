Project Overview:

I was tasked for this project to create a password generator that meets the following requirements:  

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


GIVEN I need a new, secure password:

- When I click the button to generate a password, then I am presented with a series of prompts for password criteria
- When prompted for password criteria, I select which criteria to include in the password
- When prompted for the length of the password, I choose a length of at least 8 characters and no more than 128 characters
- When prompted for character types to include in the password, I choose lowercase, uppercase, numeric, and/or special characters
- When I answer each prompt, my input should be validated and at least one character type should be selected
- When all prompts are answered, a password is generated that matches the selected criteria
- When the password is generated, the password is either displayed in an alert or written to the page

________________________________________________

Summary:

When I think about "clean" and "polished" as given in the description I think about the user interface, but I also think about the script to make the site functional.  I discovered throughout this assignment that there may be more than one way to make the site functional, but clean and polished extends beyond just what the user sees.

________________________________________________

My process:

This assignment involved quite a bit of pseudo-coding in the console as well as research.  In my head it's easy to outline what the best steps are to solve this, the challenge lies in laying that out in a script that makes sense.  Putting myself in the mind of the user and the steps that they go through helped me put the math in my head onto the script, and each portion of the script is notated to explain what it accomplishes.

This process is broken down into two parts:  How do we post the password on the page (already provided) and how do we generate the password itself.  The second function, that generates the password, is what I created.

First we ensure that the user selects the appropriate criteria to create a valid password, by verifying the character count and character types meet requirements.  This is done through a series of prompts and confirms.  

Next, I created four arrays to house the possible selections for each of the four character categories the user could choose:  Upper case letters, Lower case letters, numbers, and special characters.

To create a randomized password where the character selections will vary by user, I then set up an initially empty array (line 54) that will populate itself with between one and four strings.  These strings are confirmed by the user on lines 25-28 and are added to the empty array through a series of conditionals that live in lines 57-79.

The loop on line 84 and the logic on line 87 choose one random character housed in the array on line 54 and populate the generatePassword variable on line 75.  This loop runs for the duration that the user selected for their character count in the initial prompt on line 20, and writes itself to the page using the function already provided on line 5.

________________________________________________

Styling:

I imported the Bootstrap CDN not as much for customization, but for the ease of responsiveness it gives pages and the assurance that the rules already in place for visual functionality will carry over with the slight cosmetic changes I made.

Visually, I chose a simple minimal font and color palette based off of quartz, one of the most impenetrable materials on earth.  The variation in this gives us a background theme that's more texture than image and gives the page depth while ensuring that ease of navigation and use is the top priority.  While it may not always necessarily be about exactly how the page looks, it is extremely important to clients that it does look like some thought and care went into it.

Internally, I was able to make the HTML more user friendly with semantic elements and notations per section, should a future user want to make minor changes to the verbiage and layout of the page in the future.  

- Jim





