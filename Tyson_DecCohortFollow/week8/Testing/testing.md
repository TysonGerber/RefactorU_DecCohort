## TESTING

#WHO writes tests?
    
    traditionally: separate team of testers test all the code.
    agile shops, TDD shops: Developers test their own code.

#WHY write tests?
    
    testing helps us catch bugs in development, before they get to production, where they are cheaper to fix.

    
    testing lets us confidently refactor old code, and know immediately if the refactor broke anything that was previously working.

    testing enable continuous delivery. developers can push to master, which triggers automatic tests that determine if the push can be deployed to production automatically.
    
    testing prevents bugs from reoccuring.

#WHAT different types of test are there?

    #Unit testing:
        testing the smallest testable components in your application (ex: a single function). Typically automated, can be done manually. Tests inputs/outputs of a single function. Typically written as a 'clear box test', meaning the person writing the test does so with knowledge of the source code.
        When automated, typically runs very fast.
    
    Typical Unit testing frameworks in javascript:
        jasmine
        mocha
        chai

two different types of assertions about a function you're testing:
    optimistic assertions / test cases: if this function is given good inputs, does it produce the right output?
    pessimistic assertoins / test cases: if this function is given bad/nonsense inputs, does it fail gracefully?
        malicious assertions: if someone is trying to exploit your application, does the function fail gracefully?

#Functional testing / Feature testing (is your app functional. Does the whole application work from a users stand point?)

    Commonly phrased as user stories: As a logged in user, I WANT to see my profile picture,  SO THAT I know when I'm at my dashboard.

    tests whole features of the application from the user's perspective.
    written as 'black box tests', meaning the test is written without knowledge of the underlying code, only with knowldge of the desired funcationallity. typically automated using tools like selenium.

#HOW MANY tests should we write?

    TDD(test driven development): test everything.
    IMO: be more choosey about which features you test.
        it takes more time to write tests.
        tests themselves can have bugs.
        each test raises the possibility of a false positive.
        each test increases the length of your test results.
    Make sure you get more value from your tests than it costs you to create them.

    Don't bother testing CSS for your admin dashboard. It probably won't break, and if it does, it probably won't matter.
    DO bother testing your signup/login features. If these features don't work, your app is worthless or not usable.

#WHEN do you write tests?

    Basic: write tests AFTER you complete a feature. 
    TDD: you always write tests BEFORE you start a feature.
    Reactive: after a bug appears.

#WHEN do you run tests?

    Basic: run them manually after making major changes, and before you deploy  your application continous integration: tests are run automatically after each push to master.






