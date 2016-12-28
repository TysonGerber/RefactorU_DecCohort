//12 days of christmas
// array that is every different day of christmas
//i =0 until I =1 


var ordinalNumbers = function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}


//testing


var twelveDaysOfChristmas = ['A Partridge in a Pear Tree', '2 Turtle Doves', '3 French Hens', '4 Calling Birds', '5 Golden Rings!!!', '6 Geese a Laying', '7 Swans a Swimming', '8 Maids a Laying', '9 Ladies Dancing', '10 Lords a Leaping', '11 Pipers Piping', '12 Drummers Drumming']
for (day12 = 11; day12 < 12; day12++) {
    console.log('On the ' + ordinalNumbers(12) + ' day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day12])
    for (var day11 = 10; day11 < 11; day11++) {
        console.log('On the ' + ordinalNumbers(11) + ' day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day11])
        for (var day10 = 9; day10 < 10; day10++) {
            console.log('On the ' + ordinalNumbers(10) + ' day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day10])
            for (var day9 = 8; day9 < 9; day9++) {
                console.log('On the ' + ordinalNumbers(9) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day9])
                for (var day8 = 7; day8 < 8; day8++) {
                    console.log('On the ' + ordinalNumbers(8) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day8])
                    for (var day7 = 6; day7 < 7; day7++) {
                        console.log('On the ' + ordinalNumbers(7) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day7])
                        for (var day6 = 5; day6 < 6; day6++) {
                            console.log('On the ' + ordinalNumbers(6) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day6])
                            for (var day5 = 4; day5 < 5; day5++) {
                                console.log('On the ' + ordinalNumbers(5) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day5])
                                for (var day4 = 3; day4 < 4; day4++) {
                                    console.log('On the ' + ordinalNumbers(4) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day4])
                                    for (var day3 = 2; day3 < 3; day3++) {
                                        console.log('On the ' + ordinalNumbers(3) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day3])
                                        for (var day2 = 1; day2 < 2; day2++) {
                                            console.log('On the ' + ordinalNumbers(2) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day2])
                                            for (var day = 0; day < 1; day++) {
                                                console.log("On the " + ordinalNumbers(1) + "  day of Christmas my true love sent to me: " + twelveDaysOfChristmas[day])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}













var twelveDaysOfChristmas = ['A Partridge in a Pear Tree', '2 Turtle Doves', '3 French Hens', '4 Calling Birds', '5 Golden Rings!!!', '6 Geese a Laying', '7 Swans a Swimming', '8 Maids a Laying', '9 Ladies Dancing', '10 Lords a Leaping', '11 Pipers Piping', '12 Drummers Drumming']
for (day12 = 11; day12 < 12; day12++) {
    console.log('On the ' + ordinalNumbers(12) + ' day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day12])
    for (var day11 = 10; day11 < 11; day11++) {
        console.log('On the ' + ordinalNumbers(11) + ' day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day11])
        for (var day10 = 9; day10 < 10; day10++) {
            console.log('On the ' + ordinalNumbers(10) + ' day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day10])
            for (var day9 = 8; day9 < 9; day9++) {
                console.log('On the ' + ordinalNumbers(9) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day9])
                for (var day8 = 7; day8 < 8; day8++) {
                    console.log('On the ' + ordinalNumbers(8) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day8])
                    for (var day7 = 6; day7 < 7; day7++) {
                        console.log('On the ' + ordinalNumbers(7) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day7])
                        for (var day6 = 5; day6 < 6; day6++) {
                            console.log('On the ' + ordinalNumbers(6) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day6])
                            for (var day5 = 4; day5 < 5; day5++) {
                                console.log('On the ' + ordinalNumbers(5) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day5])
                                for (var day4 = 3; day4 < 4; day4++) {
                                    console.log('On the ' + ordinalNumbers(4) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day4])
                                    for (var day3 = 2; day3 < 3; day3++) {
                                        console.log('On the ' + ordinalNumbers(3) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day3])
                                        for (var day2 = 1; day2 < 2; day2++) {
                                            console.log('On the ' + ordinalNumbers(2) + '  day of Christmas my true love sent to me: ' + twelveDaysOfChristmas[day2])
                                            for (var day = 0; day < 1; day++) {
                                                console.log("On the " + ordinalNumbers(1) + "  day of Christmas my true love sent to me: " + twelveDaysOfChristmas[day])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
