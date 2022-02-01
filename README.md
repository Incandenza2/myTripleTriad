# myTripleTriad
Based on the card game from Final Fantasy VIII.

I want to:

    Have a small campaign style game where you get a random set of starter cards at the beginning and play maybe 7 games. For each victory you get to claim a card from the opponent and use it on your deck.

    Balance a set of cards. Separate them by levels, maybe tier 3, tier 2, tier 1. First game opponent would have 4 tier 3 cards and 1 tier 2. 
        Second game might have 2 tier 2. Fourth game would have 1 tier 1 card. Seventh might have 3 tier 1s.  
        You can see the opponent's cards, and that's the main thing that lets you win, the opponent AI will not take your hand into account.

    Maybe I can allow the player to "farm" a lower level if he can't beat the current challenge.
    
First goal: Build a factory function for card objects and create 2 cards. Try and generate a game where I can play both sides and complete a match. 
    Main challenges: The game system itself: defining the top bottom left and right properties and getting them to interact as expected through array index relationships somehow, maybe.

Second goal: Create levels for the start game function to define the tiers of cards the opponent will have.