# 📝 Forms Kata 📝

You just came into a new team after their only frontend developer left.
To make things worse, your product owner is not happy: Your team wanted to ship a customer
registration form, but most of the features are actually missing.

The codebase is somehow working, but using template driven forms and no really sophisticated validation.
After the initial discussion with the product owner, it was agreed that you are allowed to refactor the
form under one condition: You will not introduce any new bugs and deliver additional features as soon as possible.

## ⚔️ The challenge:

1. Write tests for the existing implementation. As you want to change the underlying implementation, do not
   write tests that couple behaviour on implementation

2. Replace the template driven forms with reactive forms without breaking any tests.

3. Add additional validation features, along with tests:

   - Show an error message if the name contains numbers
   - Show an error message if the mail format is not correct
   - Only allow phone numbers in the format '\d{4}/\d{4,}' (or your local style, whatever you want)
   - Allow non-latin names

4. Build the form from a configuration, e.g. dynamic forms.

(Bonus) 5. Add a button that allows to create more than one customer by duplicating the given form

## 👾 The code

- app.component is the only component used right now
- there is one quite badly written test that uses the right api - refactoring this one is recommended
- Most of the code is quite bad, don't be afraid to change it - after you added a test that allows you to be certain that it still works
