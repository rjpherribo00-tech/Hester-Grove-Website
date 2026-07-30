// Hester Grove 2026 calendar data
// month is 0-indexed (0 = January)

const SPECIAL_EVENTS = [
  // January
  { month:0, day:1, title:"New Year's Day" },
  { month:0, day:3, title:"Church Meeting", time:"1:00 PM" },
  { month:0, day:6, title:"Epiphany" },
  { month:0, day:17, title:"Cedar Grove Assoc. Pastor Meeting", time:"10:00 AM" },
  { month:0, day:19, title:"Martin Luther King Jr. Day" },
  // February
  { month:1, day:14, title:"Valentine's Day" },
  { month:1, day:18, title:"Ash Wednesday" },
  { month:1, day:20, title:"Rev. Christine Torain Preaches" },
  // March
  { month:2, day:4, title:"Pastor Preaches Revival — Obie's Chapel UHC", time:"7:00 PM" },
  { month:2, day:5, title:"Pastor Preaches Revival — Obie's Chapel UHC", time:"7:00 PM" },
  { month:2, day:6, title:"Pastor Preaches Revival — Obie's Chapel UHC", time:"7:00 PM" },
  { month:2, day:20, title:"Pastor Preaches Glenns Grove Revival", time:"7:00 PM" },
  { month:2, day:21, title:"Pastor Preaches Glenns Grove Revival", time:"7:00 PM" },
  { month:2, day:22, title:"Host Heaven Practice at Hester Grove", time:"6:00 PM" },
  { month:2, day:28, title:"Palm Sunday" },
  { month:2, day:28, title:"Youth Outing (Bowling)", time:"Time TBD" },
  { month:2, day:29, title:"Pastor Preaches Piney Grove Missionary Anniversary", time:"10:00 AM" },
  // April
  { month:3, day:2, title:"Maundy Thursday" },
  { month:3, day:3, title:"Good Friday" },
  { month:3, day:4, title:"Church Meeting", time:"1:00 PM" },
  { month:3, day:5, title:"Easter Sunday" },
  { month:3, day:6, title:"Easter Monday" },
  { month:3, day:12, title:"Host Pastor Gattis Anniversary", time:"2:00 PM" },
  { month:3, day:17, title:"The Third Play @ Hillside", time:"3:00 PM" },
  { month:3, day:26, title:"Deacon & Trustee Program", time:"2:00 PM" },
  // May
  { month:4, day:8, title:"Car Show (rain date June 6)", time:"8:00 AM" },
  { month:4, day:10, title:"Mother's Day (Women's Day)" },
  { month:4, day:14, title:"Ascension of the Lord" },
  { month:4, day:17, title:"Male Chorus Anniversary", time:"2:00 PM" },
  { month:4, day:24, title:"Pentecost Sunday" },
  { month:4, day:25, title:"Church Homecoming", time:"11:00 AM" },
  { month:4, day:26, title:"Memorial Day" },
  // June
  { month:5, day:13, title:"Strut Your Chicken Fundraiser", time:"2:00 PM" },
  { month:5, day:19, title:"Juneteenth" },
  { month:5, day:21, title:"Father's Day (Men's Day)", time:"10:00 AM" },
  { month:5, day:22, title:"Pastor's Birthday" },
  { month:5, day:24, title:"Vacation Bible School", time:"Time TBD" },
  { month:5, day:25, title:"Vacation Bible School", time:"Time TBD" },
  { month:5, day:26, title:"Vacation Bible School", time:"Time TBD" },
  { month:5, day:27, title:"Church Meeting", time:"1:00 PM" },
  { month:5, day:28, title:"Youth Day", time:"11:00 AM" },
  // July
  { month:6, day:4, title:"Independence Day" },
  { month:6, day:19, title:"Ushers' Anniversary", time:"2:00 PM" },
  // August
  { month:7, day:9, title:"Heaven Practice (Pulpit Swap) — Rev. Fischer, Hillsborough Presbyterian" },
  { month:7, day:15, title:"Youth Movie Night" },
  // September
  { month:8, day:5, title:"Church Meeting", time:"1:00 PM" },
  { month:8, day:7, title:"Labor Day" },
  { month:8, day:18, title:"Rainbow Tea Fundraiser", time:"2:00 PM" },
  { month:8, day:23, title:"Fall Revival", time:"7:00 PM" },
  { month:8, day:24, title:"Fall Revival", time:"7:00 PM" },
  { month:8, day:25, title:"Fall Revival", time:"7:00 PM" },
  { month:8, day:26, title:"Fall Revival", time:"7:00 PM" },
  { month:8, day:27, title:"Fall Revival", time:"7:00 PM" },
  // October
  { month:9, day:3, title:"Church Meeting", time:"1:00 PM" },
  { month:9, day:3, title:"Old Time Religion Day", time:"2:00 PM" },
  { month:9, day:11, title:"Pastor's 2nd Anniversary", time:"2:00 PM" },
  { month:9, day:24, title:"Hallelujah Night", time:"Time TBD" },
  { month:9, day:25, title:"Clergy Appreciation Program", time:"10:00 AM" },
  // November
  { month:10, day:11, title:"Veterans Day" },
  { month:10, day:22, title:"Pastor Preaches @ Hillsborough Presbyterian", time:"6:00 PM" },
  { month:10, day:26, title:"Thanksgiving" },
  { month:10, day:29, title:"Advent Begins" },
  // December
  { month:11, day:25, title:"Christmas" },
  { month:11, day:31, title:"Watch Night" },
];

const BIRTHDAYS = [
  { month:0, day:5, name:"Katie Evans" }, { month:0, day:9, name:"Patsy Miles" },
  { month:0, day:27, name:"Deacon Daniel Leigh" }, { month:0, day:31, name:"Bertha Beasley" },
  { month:1, day:5, name:"Noah Sellars" }, { month:1, day:9, name:"Carolyn Allison" },
  { month:1, day:13, name:"Minnie Mae Cates" }, { month:1, day:18, name:"First Lady" },
  { month:1, day:20, name:"Mercadez Beasley" }, { month:1, day:20, name:"Robert Purcell" },
  { month:2, day:1, name:"Willie Harris" }, { month:2, day:8, name:"Curtis Fuller" },
  { month:2, day:15, name:"Paula Capers" }, { month:2, day:18, name:"Ester Jones" },
  { month:2, day:23, name:"Frankie Clayton" }, { month:2, day:28, name:"Trustee Perry Miles" },
  { month:2, day:30, name:"Jeraline Harrelson" }, { month:2, day:31, name:"Curtis Poteat" },
  { month:3, day:2, name:"Marcella Poteat" }, { month:3, day:9, name:"Lee Poteat" },
  { month:3, day:9, name:"Irie Poteat" }, { month:3, day:15, name:"Alfreda Poteat" },
  { month:3, day:27, name:"Kristy Torain" },
  { month:4, day:3, name:"Emma Webb" }, { month:4, day:3, name:"Mae Frances Royster" },
  { month:4, day:7, name:"Danielle Pherribo" }, { month:4, day:9, name:"Peyton Pittman" },
  { month:4, day:22, name:"Ruth Chambers" }, { month:4, day:22, name:"Joyce B. Graves" },
  { month:4, day:31, name:"Garland Harrelson" },
  { month:5, day:2, name:"Angela Fuller" }, { month:5, day:6, name:"Sandra Scoggins" },
  { month:5, day:9, name:"William Smith" }, { month:5, day:12, name:"Avah Woods" },
  { month:5, day:22, name:"Pastor Neal" },
  { month:6, day:13, name:"Gloria Clayton" }, { month:6, day:14, name:"Camera Sellars" },
  { month:6, day:17, name:"Ashley Poteat" }, { month:6, day:20, name:"Latosha Smith" },
  { month:6, day:22, name:"Brenda Chambers" }, { month:6, day:22, name:"Cynthia Woods" },
  { month:6, day:22, name:"Majesty Gillom" }, { month:6, day:26, name:"Precious Woods" },
  { month:7, day:4, name:"Cassandra Torain" }, { month:7, day:7, name:"Gloria Pherribo" },
  { month:7, day:7, name:"Tarik Conyers" }, { month:7, day:16, name:"Shirley Richmond" },
  { month:7, day:20, name:"Deacon Ryan Pherribo Sr." }, { month:7, day:21, name:"Devonta Hinton" },
  { month:7, day:22, name:"Linda Scoggins" }, { month:7, day:28, name:"Creavon Clayton" },
  { month:8, day:11, name:"Katie Cates" }, { month:8, day:16, name:"Nikki Purcell" },
  { month:8, day:16, name:"Wilhelmina Woods" }, { month:8, day:17, name:"Carolyn Crisp" },
  { month:8, day:20, name:"Knowledge Scott" }, { month:8, day:26, name:"Tonya Smith" },
  { month:9, day:16, name:"Frances Sanford" }, { month:9, day:16, name:"Tylaya Street" },
  { month:9, day:17, name:"Shantel Capers" }, { month:9, day:18, name:"Janie Leath" },
  { month:9, day:18, name:"Izel Smith" }, { month:9, day:23, name:"Dee Royster" },
  { month:9, day:24, name:"Charisse McDaniels" }, { month:9, day:27, name:"Kaleb Cameron" },
  { month:10, day:1, name:"Cynthia Kenion" }, { month:10, day:2, name:"Dorothy Poteat" },
  { month:10, day:9, name:"Daniel Capers" }, { month:10, day:12, name:"Donald Clayton" },
  { month:10, day:16, name:"Vanessa Leigh" }, { month:10, day:19, name:"Rev. Christine Torain" },
  { month:10, day:19, name:"Brenda Faucette" }, { month:10, day:20, name:"Jeremiah Fuller" },
  { month:10, day:30, name:"Trustee James Graves" },
  { month:11, day:1, name:"Rev. Charlie Woods" }, { month:11, day:7, name:"Ralph Hester" },
  { month:11, day:15, name:"Ryan Pherribo Jr." }, { month:11, day:17, name:"Deacon Larry Lunsford" },
  { month:11, day:18, name:"Trustee Curdell Chambers" }, { month:11, day:25, name:"Barbara Chambers" },
  { month:11, day:29, name:"Linda O'Kelly" },
];

// Recurring: Bible Study every Wednesday 6:00-7:30 PM; Communion first Sunday of month 11:00 AM
function getRecurringEvents(year, month, day){
  const events = [];
  const d = new Date(year, month, day);
  if (d.getDay() === 3){ events.push({ title:"Bible Study", time:"6:00 PM - 7:30 PM" }); }
  if (d.getDay() === 0 && day <= 7){ events.push({ title:"Communion", time:"11:00 AM" }); }
  return events;
}

function getEventsForDay(year, month, day){
  const special = SPECIAL_EVENTS.filter(e => e.month === month && e.day === day)
    .map(e => ({ title:e.title, time:e.time || '' }));
  const recurring = getRecurringEvents(year, month, day);
  const bdays = BIRTHDAYS.filter(b => b.month === month && b.day === day)
    .map(b => ({ title: b.name + "'s Birthday", time:'', isBirthday:true }));
  return [...recurring, ...special, ...bdays];
}
