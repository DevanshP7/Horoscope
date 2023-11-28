function go(){
    sign = ''
    text = []
    month = document.getElementById('i_month').value
    date = document.getElementById('i_date').value
    if (document.getElementById('i_month').value !== ''){
        if (document.getElementById('i_date').value == ''){
            window.alert("Please Enter Something...")
        }
        else if (document.getElementById('i_date').value < 1){
            window.alert("Please Write Any Integer Greater Than 0...")
        }
        else if (document.getElementById('i_date').value > 31){
            window.alert("Please Write Any Integer Less Than 32...")
        }
        else{    
                if (month == "January"){
                    if (date < 20){
                        sign = 'Capricorns'
                    }
                    else{
                        sign = 'Aquarius'
                    }
                }
                        
                if (month == "February"){
                    if (date < 19){
                        sign = 'Aquarius'
                    }
                    else{
                        sign = 'Pisces'
                    }
                }    
                        
                if (month == "March"){
                    if (date < 21){
                        sign = 'Pisces'
                    }
                    else{
                        sign = 'Aries'
                    }
                }
                        
                if (month == "April"){
                    if (date < 20){
                        sign = 'Aries'
                    }
                    else{
                        sign = 'Taurus'
                    }
                }
                        
                if (month == "May"){
                    if (date < 21){
                        sign = 'Taurus'
                    }
                    else{
                        sign = 'Gemini'
                    }
                }   
                        
                if (month == "June"){
                    if (date < 22){
                        sign = 'Gemini'
                    }
                    else{
                        sign = 'Cancer'
                    }
                }
                        
                if (month == "July"){
                    if (date < 23){
                        sign = 'Cancer'
                    }
                    else{
                        sign = 'Leo'
                    }
                }   
                        
                if (month == "August"){
                    if (date < 23){
                        sign = 'Leo'
                    }
                    else{
                        sign = 'Virgo'
                    }
                }
                        
                if (month == "September"){
                    if (date < 23){
                        sign = 'Virgo'
                    }
                    else{
                        sign = 'Libra'
                    }
                }
                        
                if (month == "October"){
                    if (date < 24){
                        sign = 'Libra'
                    }
                    else{
                        sign = 'Scorpio'
                    }
                }
                        
                if (month == "November"){
                    if (date < 22){
                        sign = 'Scorpio'
                    }
                    else{
                        sign = 'Sagittarius'
                    }
                }
  
                if (month == "December"){
                    if (date < 22){
                        sign = 'Sagittarius'
                    }
                    else{
                        sign = 'Capricorns'
                    }
                }
                
                if (sign == 'Sagittarius'){
                text = ["You are optimistic, lover of freedom, fair-minded & honest. \nYou are not afraid of anything and you are self confident. \nYou will choose your own path even if Google/Apple Maps Tell You To Take A Turn.",
                        'Adventurous',
                        '1, 5, 8, 9',
                        'Sunday, Tuesday, Thursday',
                        'Yellow, Orange, Saffron, Purple, and Red']
                }
                if (sign == 'Capricorns'){
                text = ["You are ambitious & determined. \nYou have a strong will power. \nYou like getting ahead in life. \nIf you want something then you will get it no matter how long it takes.",
                        'Hardworking',
                        '3, 6, 2, 7, 10',
                        'Wednesday, Friday, Saturday',
                        'Black, Brown, Gray, Green']
                }
                if (sign == 'Scorpio'){
                text = ["You are trust worthy. \nYou have strong emotions. \nYour emotions are so powerful that when you enter a room then people can feel the power and intense energy.",
                        'Intense',
                        '1, 4, 8',
                        'Tuesday, Thursday',
                        'Dark red, Scarlet, Purple, Maroon']
                }
                if (sign == 'Libra'){
                text = ["You like justice, equality & fairness. \nYou will go to any length to avoid conflicts. \nYou like peace. \nYou have a gift of seeing something positive in everything.",
                        'Empathetic',
                        '3, 6, 7, 9',
                        'Wednesday, Friday, Saturday',
                        'White, Grey, pink, green']
                }
                if (sign == 'Virgo'){
                text = ["You are never afraid of anything. \nYou like to solve problems. \nYou are a worrier who is never afraid of fighting with problems.",
                        'Perfectionist',
                        '5, 3, 6, 7',
                        'Monday, Wednesday, Thursday',
                        'Purple, Green, White, Grey, Blue']
                }
                if (sign == 'Leo'){
                text = ["You never give up. \nYou always find a strength for pushing yourself forward. \nYou can't let your failures define you. \nYou have to let your failures teach you.",
                        'Confident',
                        '1, 4, 5, 8, 9',
                        'Sunday, Monday, Thursday',
                        'Orange, Yellow, Gold, Purple']
                }
                if (sign == 'Cancer'){
                text = ["Just like the moon, you shine in times of darkness. \nLike the moon, you are always changing and you are never the same two nights in a row.",
                        'Passionate',
                        '4, 1, 8',
                        'Sunday, Monday, Thursday',
                        'Sea Green, Blue, White, Silver, Yellow']            
                }
                if (sign == 'Gemini'){
                text = ["You are a simple person with a complicated mind. \nYou are playful and intellectually curious. \nYou are a very interesting personality.",
                        'Versatile',
                        '3, 7, 6, 11',
                        'Wednesday, Friday, Saturday',
                        'Light Green, Pale Yellow, and Blue']
                }
                if (sign == 'Taurus'){
                text = ["You either talk about something good or you don't talk. \nIf you have a goal then you will achieve it against all the odds.",
                        'Loyal',
                        '2, 3, 10, 11',
                        'Monday, Friday, Saturday',
                        'Green, Grey, Sky Blue, Pink, White']
                }
                if (sign == 'Aries'){
                text = ["You are very ambitious. \nYou are brave and never afraid of anything. \nYou are honest. \nYou are a creative and optimistic person. \nYou are an excellent organizer.",
                        'Competitive',
                        '1, 5, 9',
                        'Sunday, Tuesday, Thursday',
                        'Deep Red, Saffron, Yellow']
                }
                if (sign == 'Pisces'){
                text = ["You have an endless imagination. \nYou are very hardworking. \nYou are wise and unselfish.",
                        'Creative',
                        '1, 3, 4, 9, 12',
                        'Sunday, Monday, Wednesday',
                        'Peach, Mauve, Sea Green, Yellow, Lavender']
                }
                if (sign == 'Aquarius'){
                text = ["You are advanced and optimistic. \nYou are very innovative. \nYou are not afraid to think outside the box. \nYou have a fearless desire to do things your own way.",
                        'Independent',
                        '2, 3, 7, 11',
                        'Thursday, Friday, Saturday',
                        'Black, Green, Grey, Cyan, Aqua Blue']
                }
            }
    }                
    else{
        window.alert("Please Select A Month...")
    }
    console.log(text)
    document.getElementById('a').innerHTML = 'About: ' + text[0]
    document.getElementById('b').innerHTML = 'Strength: ' + text[1]
    document.getElementById('c').innerHTML = 'Lucky Number: ' + text[2]
    document.getElementById('d').innerHTML = 'Lucky Days: ' + text[3]
    document.getElementById('e').innerHTML = 'Lucky Colours: ' + text[4]
}