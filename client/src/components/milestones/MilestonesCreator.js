import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AddMenu from './AddMenu'
import { List, Card, CardContent, Typography, CardActions, Button , Box, CardMedia} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import IconButton from '@material-ui/core/IconButton'
import uuidv4 from '../../util/uuid'
import EditMilestoneDialog from './EditMilestoneDialog'

const typeToContent = {
    "Military Experience": [
        {question: 'If you served in the military, when and in what branch did you serve? Were you drafted or did you enlist voluntarily? If the latter, why?',
        answer: ""},
        {question: "Where did you serve? Describe your basic training and the experience of leaving home. What was it like for you to adjust to military life? Was it harder or easier than you had thought? Describe a typical day early in your service.",
        answer: ""},
        {question: "Share your impressions of the place or places you served. If you were deployed to more than one location, describe each of these and what you did there. Describe any interactions you had with residents of the surrounding communities.",
        answer: ""},
        {question: "What were your responsibilities? Describe any specialized training you received or new skills that you learned. Did any of these carry over into your future professional life?",
        answer: ""},
        {question: "Did you see active combat? If so, describe the conflict you participated in (when and where it happened, what the goals of your battle were), your responsibilities during actual combat, and your impressions of the experience. Did you lose any friends or colleagues in battle or see any get injured? Describe these experiences if you had them. If you experienced any injuries or trauma from your service, describe the experience. Describe any impact this had on your post-military life.",
        answer: ""},
        {question: "If you received any promotions during your service, describe when and how they happened. What new responsibilities did you take on when promoted? How did you feel about your new position? If you moved because of your promotion, describe where you moved to and what the experience was like. If your spouse/kids were involved in any of your moves, describe their activities and your perceptions of their experience during this time.",
        answer: ""},
        {question: "How long did you stay in the service? If you chose to pursue a long-term military career,  describe why—what about it interested or benefited you? If you chose to leave, explain why and what your future plans were. If you retired, say what rank you retired at and describe your future plans. What were your feelings about returning to civilian life?",
        answer: ""},
    ],
    "Relationship/Marriage": [
        {question: "Describe your relationship—if it was a continuing relationship from college/high school, how did it change from your school days? How did your relationship evolve over time?",
        answer: ""},
        {question: "If you met someone new, when and how did you meet him/her? Describe this person and what you found attractive in him/her. Describe your first date. Describe your relationship after that—how often did you talk to each other and/or see each other? When you got together, what did you like to do? Recall an especially memorable time you had together.",
        answer: ""},
        {question: "If your family knew about your relationship, what were their feelings about it and about your significant other? How well did you significant other get along with your family? How did you feel when you first introduced him/her to your family? If your family opposed your relationship or had doubts about your significant other, how did the two of you handle this? Describe how your family’s relationship to your significant other evolved over time.",
        answer: ""},
        {question: "Conversely, how did your significant other’s family feel about you? And what did you feel about them? Describe them and your relationship with them. If they had any doubts about you or disapproved of your relationship, explain why and describe how you and your significant other handled this conflict.",
        answer: ""},
        {question: "If your relationship ended, how and why did it end? Who decided to end it? What were you thinking and feeling during this time—for instance, did you feel hurt, anger, relief, or a combination of feelings?",
        answer: ""},
        {question: "If you married, how long had you been together before you decided to marry? Describe your proposal and engagement—where did your proposal take place? Did you plan it in advance (or expect it)? How long were you engaged before you got married? When and where did your wedding take place? How much planning was involved? Describe the planning process. How many people attended? Describe the ceremony and any reception/party/ shower associated with the wedding. What were the most memorable moments of that day? The most surprising or troubling?",
        answer: ""},
        {question: "Describe your living situation after you married—where did you live and what were you doing for work during that time? What was a typical day in your home life like? What was your social life as a couple like after you married? What did you like to do for fun? How did you split up your household responsibilities?",
        answer: ""},
    ],
    "Your Background and Early years": [
        {question: "Where were your parents and grandparents from? How did they meet? Describe to the best of your knowledge. Describe where they came from and later lived, what they did for a living, their education and personal history (to the extent possible).",
        answer: ""},
        {question: "If your parents or grandparents came from another country, describe when and why they decided to emigrate. What did they think they would find in their new country? Was their new home anything like they had expected?",
        answer: ""},
        {question: "Did your parents or grandparents speak languages at home other than English? If so, what  were they? Was having English as a second language an obstacle for them, and if so, how  did they cope with it? If another language or culture influenced your life, give examples or share stories about how.",
        answer: ""},
        {question: "Describe the area(s) in which they settled and raised their families—were they urban or rural? What were their dominant ethnic/religious groups, and what were the major industries in these areas?",
        answer: ""},
        {question: "When and where were you born? What was your family situation like at the time? That is, were there a lot of extended family or close friends in the area?",
        answer: ""},
        {question: "Where did you fall in the family birth order (e.g., were you an oldest child, a middle child, or a youngest child?) How do you think your placement in the family birth order impacted you and your experience?",
        answer: ""},
        {question: "What are your earliest memories? Describe as best you can your earliest memories of your home, family, and activities.",
        answer: ""},
        {question: "Describe your brothers and sisters, giving their names, relative ages, and details or their personalities and relationships with each other and with you—how did these impact your early childhood?",
        answer: ""},
    ],
    "Childhood and Growing up": [
        {question: "What were your favorite games/toys/pastimes when you were a child? Where did you like to play, and with whom?",
        answer: ""},
        {question: "What were your favorite activities with your family and with your parents?",
        answer: ""},
        {question: "If religion was a major part of your childhood, describe your faith community and practices. How often did you go to religious services, and where? How did you feel about these services as a child? Did you have any formal religious training (e.g., Sunday school or Hebrew school?) Describe any memorable clergy members from your community growing up.",
        answer: ""},
        {question: "Describe your favorite holidays or celebrations growing up. What were they, and what did you and your family do to celebrate? Describe any special foods/music/decorations or other prominent elements of these occasions. Describe any particularly memorable celebrations or events that took place during this time.",
        answer: ""},
        {question: "Describe your first day of school. Where was your school, and what was it like? How big was it? Give details of what it looked, sounded, and smelled like. If you had older brothers or sisters, did they help you or influence your initial ideas of what school would be like? If not, what did you expect? How did you feel?",
        answer: ""},
        {question: "Who was your first teacher? Describe him or her and what your first impressions were. Did these change over time, and if so, how?",
        answer: ""},
        {question: "Describe something you learned in your first months of school—give details of what lessons were like, what you did, and how you felt about school.",
        answer: ""},
        {question: "What were your favorite subjects in school? Your least favorite? What were you good at? Did  your feelings at the time have any bearing on your later academic or professional choices?",
        answer: ""},
        {question: "Did you ever have challenges with your classes or with your learning? Describe any subjects/classes that were difficult for you. What did you find difficult about them, and how did you deal with classes/subjects you found hard or didn’t like? Who helped you with your problems in school, if anyone?",
        answer: ""},
        {question: "Did your parents help you with your schoolwork or influence your early educational direction in any way? If so, how?",
        answer: ""},
        {question: "Who were your best friends at school? Describe them, their personalities, their lives, and what you liked to do together.",
        answer: ""},
        {question: "Were you ever teased or bullied in school? If so, who picked on you and why? How did you handle it? Who did you go to for help, if anyone?",
        answer: ""},
        {question: "Describe one or more memorable adventures or favorite activities with your friends. What did you learn from these experiences, and why were they memorable?",
        answer: ""},
        {question: "Did you participate in any organized after-school activities, such as Little League or scouting? If so, describe your activities—how often you participated, who was there, what you learned, how you felt about it.",
        answer: ""},
        {question: "Did you have chores or after-school jobs? If so, describe them—what did you do, for whom, how often, and how much did you get paid? Did others in your close circle (classmates, siblings) hold similar jobs?",
        answer: ""},
    ],
    "Teen Years": [
        {question: "Describe your high school, if you attended one: What was it called, where was it, how big was it, and what did it look like? What was your first day like? Were you apprehensive? Did you know anyone there (that is, did your friends from grade school/middle school follow you there)?",
        answer: ""},
        {question: "How did your high school experience differ from your earlier school experience? Did you like your classes more or less? Why?",
        answer: ""},
        {question: "Did you start to find your academic direction then, or not? What were your favorite classes, and why? Describe your teachers, classmates, and any memorable activities you did.",
        answer: ""},
        {question: "At this point, had you started thinking about and working toward your future career? If so, how did you prepare yourself, and what were your goals? Why did you choose the direction that you did?",
        answer: ""},
        {question: "If you had a future career in mind at the time that didn’t work out, what was it, why did you choose it, and what caused you to change your mind later?",
        answer: ""},
        {question: "What was your social life like in high school? Who were your friends, and what did you like to do together? Describe your relationships and who your friends were—where did they live, what were their families like, and what were their plans for the future? Describe your time together—what did you like to talk about, and what did you learn from them?",
        answer: ""},
        {question: "Did you participate in any extracurricular activities in high school, such as sports, theater, or music? Describe these and the people involved, including your teacher/coach and any friends you made there. Describe an event involving them (or two) that you’re particularly proud of.",
        answer: ""},
        {question: "Were you romantically involved with anyone in high school, or did you experience a crush during this time? Describe the person you liked and why you were attracted to him/her. Say when, where, and how you met this person. What did he/she look like, and what did you know about him/her when you first noticed him/her? What attracted you to him/her? Describe what it was like asking this person out or what it was like being asked out. Were you afraid to declare your affections? Describe your first date and/or a typical date—what did you like to do and where did you like to go? Did you have a curfew or other limitations on your activities? How long were you together, and how did your relationship end (if it did)?",
        answer: ""},
        {question: "Did your relationships with your siblings/parents change as you matured? Did you rebel against your parents/teachers in any way during your teen years? How did your parents handle your teenage identity?",
        answer: ""},
        {question: "What kind of household responsibilities did you have during these years? How much time did they take? What did you feel about these obligations?",
        answer: ""},
        {question: "What were the major social events at your high school? Describe any big events such as football  games, dances, etc. that you or others attended. How did you and your classmates prepare for  these events, how far in advance did you start planning, and who did you attend these events with?",
        answer: ""},
        {question: "Describe your high school graduation (or the circumstances under which you left high school, if you didn’t formally graduate). Were you happy to be finished, or apprehensive? If you celebrated your graduation/completion, how did you celebrate, and with whom? Was your family with you? How did they feel?",
        answer: ""},
    ],
    "College": [
        {question: "Where did you attend college/community college/vocational school? Did you parents pay for your education, or did you? Did you live on campus, off-campus, or with your family? Describe your living situation, if it changed.",
        answer: ""},
        {question: "What was your major or intended major? What classes did you sign up for?",
        answer: ""},
        {question: "Describe your first day on campus. What were your impressions of the campus and the people? What did you do on your first day? What did you do in your first week? Describe your first class-how many people were in it, and what was the instructor like? How was the class structured? Was it harder/easier than you expected, and why? Describe any classmates/dorm mates you met on your first day.",
        answer: ""},
        {question: "Describe what it was like for you to adjust to college life. Was the adjustment difficult for you in any way, and if so, why and how? What was it like adjusting to living independently, if you left home for college? Were you homesick? If so, how did you cope with this?",
        answer: ""},
        {question: "Describe your social life. Who were your friends, and how did you meet them? Describe what they were like, where they were from, and what their lives and plans were. What kinds of activities did you like to do together? Describe some memorable times you had together.",
        answer: ""},
        {question: "Describe any romantic relationships you had in college. Who were you involved in, how did you  meet, and what did you find attractive or special about them? How long did your relationships last, and how and why did they end? Did you learn anything about yourself from these experiences?",
        answer: ""},
        {question: "Did you belong to any clubs or participate in any extracurricular activities in college? If so, what were they and what was your role in the organization? Why and how did you join, and what was your experience like with the group?",
        answer: ""},
        {question: "Were fraternities/sororities a big part of the social life of your school? If you belonged to a Greek society, describe it, why you chose it, how you came to be a member, and what your experience with the group was like. Did you live in their house? Describe their major activities and events/projects.",
        answer: ""},
        {question: "Did your living situation change over the course of your college career (that is, did you change dorms, move from off-campus to on campus or vice versa?) Describe these changes and why they happened. How did you react to them, and what did you think about them?",
        answer: ""},
        {question: "What were the major social events or activities on campus? Describe any campus customs or urban myths.",
        answer: ""},
        {question: "How were you as a student? Reflect on your choice of classes, which classes/subjects you enjoyed most/least, and any classroom experiences or instructors who had a major impact on you and your future life. How regularly did you attend classes and how much did you study? Did you engage in any independent research? Were there any subjects you struggled with, and if so, what were they?",
        answer: ""},
        {question: "Describe any paying jobs you had during college—were they on or off campus? How did you find them? Did they influence your future professional life in any way?",
        answer: ""},
        {question: "Was your graduation memorable? If so, describe it and what made it special. Who was there to celebrate with you? If you didn’t graduate, describe why and how you left school, and describe how you felt--were you sad or relieved to be finished?",
        answer: ""},
        {question: "What were your plans for after graduation? Describe them—did they change during your college career?",
        answer: ""},
    ],
    "Graduate or Professional school": [
        {question: "Where did you attend graduate/professional school? What area of study did you pursue, and why? What degree were you pursuing, and what were your future career plans?",
        answer: ""},
        {question: "How did you pay for your studies? Did you have help from family, pay for it yourself, take out loans, or receive any aid?",
        answer: ""},
        {question: "Describe the program. What were your interactions like with professors and fellow students? Describe your classes and some of the memorable people from that time. Describe a typical school day.",
        answer: ""},
        {question: "How did your classes and study compare to your undergraduate work? Was it harder than you thought? More interesting? How did you adjust to the workload?",
        answer: ""},
        {question: "Where did you live and who did you live with during this time? Describe the setting.",
        answer: ""},
        {question: "Describe your social life during this time. Who did you socialize with the most and what did you do when you were together?",
        answer: ""},
        {question: "Describe any major academic projects (theses, research projects, publications, clubs/societies) that you were involved in. How did you come to be involved in these? How much time did they take up? What were the biggest challenges involved? Describe your participation in these projects, including any socializing, travel or research activities.",
        answer: ""},
        {question: "If you were required to take a major exam (e.g. bar exam, board exam, or thesis defense), describe how you prepared for it, how you felt, and what it was like taking it. How long did you have to wait to learn your results? Describe this time and how you felt. How confident did you feel about your performance. If you passed, how did you celebrate? If you didn’t, how did you feel and how did you cope? Did you decide immediately to retake it, wait, or give up?",
        answer: ""},
    ],
    "Your first full-time job": [
            {question: "What was your first full-time job after finishing school? Where was it? Describe how you got the job. How much were you paid? Was this considered a good amount at the time? Why did you choose this line of work, or how did you get into it? Describe what it was like to start working—what was a typical day like for you? What were your responsibilities? What did you like and/or dislike about it? What did you find easy or difficult in your work? Describe some of the people you encountered in your work—your boss, coworkers, and/or customers.", 
            answer: ""},
            {question: "Where did you live during this time? Did you rent or own your home, or continue living with your family? Who did you live with, and what was your home life like? Describe the place you lived in—how many people lived there, how you decorated and maintained it, whether it was noisy or quiet, etc.", 
            answer: ""},
            {question: "What was your social life like as a young adult? Did you make any new friends during this time? If so, who were they, how did you meet them, and what were they like? What kinds of activities did you like to do together?", 
            answer: ""},
            {question: "At the time, did you have any long-term plans for professional advancement? Where did you see yourself going professionally and what did you hope to accomplish?", 
            answer: ""},
    ],
    "Children" :[
        {question: "Describe the arrival of your first child. Was your child a boy or girl (or multiples), and what was his/her name? How long were you and your partner together before the child was born? Where were you living at the time and what were your circumstances (e.g., were you working or in school?)",
        answer: ""},
        {question: "If you’re the mother, describe your pregnancy—what was it like discovering you were expecting? What first made you think you might be pregnant? How did you feel physically and emotionally during this time? How did you family and friends respond, and what did they do (if anything) to support you?",
        answer: ""},
        {question: "If you’re the father, describe how you felt upon learning you would become a father. Were you nervous, happy, surprised, or feeling something else?",
        answer: ""},
        {question: "If you adopted your child, describe how you came to the decision to adopt, how long you had to wait to receive a child, and where your child came from.",
        answer: ""},
        {question: "What did you do to prepare your home for the new child?",
        answer: ""},
        {question: "Describe in detail the day the child was born (or came into your care, if adopted). When and where was the child born? Were you surprised at when and how the baby arrived? Was labor easy or difficult, long or short? Who was with you or helping you around that time?",
        answer: ""},
        {question: "Describe the baby’s first weeks at home. How did your life and that of your partner/spouse change? How were you feeling emotionally and physically during this time? What did you do to adapt to parenthood? What were the hardest parts of adapting to parenthood? The best? How did family and friends help you during this time?",
        answer: ""},
        {question: "Describe your new baby. What did he/she look like? How big was he or she? Do you think he/she resembled you or your spouse? What was the baby’s personality like (e.g., fussy, calm, shy)?",
        answer: ""},
        {question: "Describe how your baby grew and changed over time. Describe his/her relative health and the timing of his/her developmental milestones, such as sleeping through the night, eating solid food, teething, crawling, sitting up, etc.",
        answer: ""},
        {question: "If you had more than one child, give the age difference between the children. Were you expecting a subsequent child?",
        answer: ""},
        {question: "How did any older children react to the arrival of the baby? Did they know about the child before he/she arrived? Describe their emotions when the baby arrived and as they adjusted to their new sibling. How did their daily lives change because of the new arrival?",
        answer: ""},
    ],
    "Significant Life Event": [
        {question: "Describe a major event that had a big impact on your life (e.g., accidents, illnesses, death, major business or personal success/failures/events). What was this event? When and where did it happen? How did it unfold? Who was involved, besides you, and what was their involvement? How did you initially react?",
        answer: ""},
        {question: "What short-term changes happened because of it? How did you cope with it over time? How long did it take for your life to return to normal (or become your new normal) after it happened? What kind of support (or opposition) did you have during this time?",
        answer: ""},
        {question: "Explain why this event was significant for you—how did it impact the way you live from day to day? What long-term changes (emotional, financial, professional, or other) resulted from it? How did it impact your relationships with those around you?",
        answer: ""},
        {question: "What lessons did you learn from this event?",
        answer: ""},
    ],
    "Career changes": [
        {question: "When and how did you find your new position? Were you consciously looking for a new job at the time? If so, why? Describe how and why you left your old position.",
        answer: ""},
        {question: "Describe your new position—where was it, what was your title, and what were your responsibilities? Why did you choose this position?",
        answer: ""},
        {question: "Describe your new workplace, your colleagues, your bosses, and/or your customers. How did this differ from your previous position(s), and how did you adjust to your new responsibilities? Describe how it felt adjusting to the new job—for instance, was it easy or hard? Were you excited, nervous, bored? What new skills did you learn in this position?",
        answer: ""},
        {question: "Describe how this impacted other aspects of your life—for instance, did you have to move or change your schedule to accommodate the new job? Did it improve your financial situation? Describe a typical workday.",
        answer: ""},
    ],
    "Moves": [
        {question: "If you moved during your adult life, describe the move(s): When and why did you move, and where did you move to? Did you move to another home nearby, or to a different area entirely? Was your move sudden or planned long in advance?",
        answer: ""},
        {question: "Describe your preparation for the move. What kind of help did you have, and what kind of research did you do before moving? How much did you know about your future home before you moved? Which family members moved with you? 1",
        answer: ""},
        {question: "Describe the moving day (or days). Was it organized or hectic? How were you and your family feeling that day? How did you get to your new home (e.g., driving, flying)? How long did it take for you to get there and to get all your belongings there?",
        answer: ""},
        {question: "Describe your feelings about the move: For instance, did you feel any regret about leaving behind your old home/friends/neighborhood? If so, how did you cope with this? Alternately, were you looking forward to moving to a better location? If so, what were you hoping to find and experience in your new home?",
        answer: ""},
        {question: "Describe your new home. If you just changed homes in the same area, describe your new home—how did it differ from your old home? Where was it? Was it bigger or smaller? What was the neighborhood like and how did it compare to your old one? If you moved to a different town, describe both your new home and your new community. Where was your new hometown, and what was it like? How was it different from your old hometown? Was it different in the ways you expected? Describe the community and neighborhood—its landscape, architecture, culture, climate, and people.",
        answer: ""},
        {question: "Describe your adjustment to your new home: Were you initially happy there or not, and why? What did you miss (if anything) about your old home? What did you like the most about your new home? The least? What was the hardest thing to adjust to there, and why? Describe any new relationships you developed in your new home (e.g., friends, neighbors, church, community groups, etc.) and how these impacted you and your family.",
        answer: ""},
        {question: "How long did you stay there before moving on to your next home?",
        answer: ""},
    ],
    "Travel/Vacations": [
        {question: "What kind of travel did you do as an adult, if any? Was it for fun, business, or for family visits?",
        answer: ""},
        {question: "If you had a regular vacation spot or ritual, what was it? What time of year did you travel? Where did you go, how did you get there, and what did you do while there? Who went with you? How long did you stay? How did you come to choose this place or routine? What did you like most about this place/routine?",
        answer: ""},
        {question: "If you traveled for business, describe where you went on these trips. What were your responsibilities while you were on the road? How long were you typically away from home? How often did you travel? Did you enjoy traveling or find it burdensome, and why? Was it hard being away from home? Did you meet any significant colleagues, learn anything or develop any new skills during your travels?",
        answer: ""},
        {question: "Describe any particularly memorable trips or events during trips. What happened, and what made the event memorable for you?",
        answer: ""},
    ],
    "Holidays and Special events": [
        {question: "Describe a major holiday you regularly celebrate and how you celebrate it. Describe how you prepared for the day (e.g., food, decorations, preparing houseguests, etc.) What were your favorite things to do during this holiday? Describe how the day typically unfolded.",
        answer: ""},
        {question: "Describe a particularly memorable holiday. What happened that made it memorable, for better or for worse? Who was with you, and what did you do? Describe the day (or surrounding period) and how it unfolded.",
        answer: ""},
        {question: "Describe other memorable celebrations or observations you’ve attended (birthdays, funerals, weddings, etc.)—what happened, who was there, and what was memorable about them?",
        answer: ""},
    ],
    "Hobbies/Personal passions": [
        {question: "Do you have a hobby, pastime, or community activity that you feel passionate about? Describe it and why it resonates with you.",
        answer: ""},
        {question: "How did you become involved in this activity? Who introduced you to it? Describe any friends you made in the course of this activity.",
        answer: ""},
        {question: "How did this hobby/activity impact other areas of your life? Did anyone in your family share your interest? Did you make any professional or important personal connections through these activities?",
        answer: ""},
        {question: "What do you think you learned from your hobbies/activities? How did these lessons carry over into other areas of your life?",
        answer: ""},
    ],
    "Life Lessons and Messages": [
        {question: "Looking back on your life, what have you found most meaningful in terms of your values and beliefs? Why?",
        answer: ""},
        {question: "If there’s one lesson or life tip you’d like everyone in your family to know, what is it and how did you learn this?",
        answer: ""},
        {question: "If you’ve made any serious mistakes in life, what were they? What did you learn from them? And how would you advise others to avoid them?",
        answer: ""},
        {question: "What has made you happiest in your life?",
        answer: ""},
        
    ]
}

const typeToImage = {
    "Relationship/Marriage": "https://ak5.picdn.net/shutterstock/videos/2347895/thumb/3.jpg",
    "Military Experience": "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p71_i56_w750.jpeg",
    "Your Background and Early years": "https://www.virtual-college.co.uk/-/media/virtual-college/news/safeguarding-news/the-tickell-review-of-the-early-years-foundation-stage.ashx?h=504&la=en&mh=504&mw=896&w=896&hash=ED9C810CF3A2786973A3194A26CD3F4FD3F7DE45",
    "Childhood and Growing up": "https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/08/kids-playing-outside.jpg",
    "College": "https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2015/12/LawDegree_graduationcap_38250038_l1-1024x683.jpg",
    "Graduate or Professional school": "https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2015/05/istockgraduationmortarboards.jpg?v=5606",
    "Your first full-time job": "https://blog.hubspot.com/hubfs/biweekly-paycheck.jpg",
    "Children": "https://www.cdc.gov/childrenindisasters/features/images/childrens-preparedness-unit_456px.jpg",
    "Career changes": "https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2018/08/06065455/How-to-Make-a-Career-Change-or-Transition-353x177.jpg",
    "Moves": "https://t2conline.com/wp-content/uploads/2018/01/21d89630b2308f383404a768f516e5b4.jpeg",
    "Travel/Vacations": "https://www.komando.com/wp-content/uploads/2019/05/beach-vacation.jpg",
    "Hobbies/Personal passions": "https://henricolibrary.org/images/easyblog_articles/129/b2ap3_large_20190712-hobbies-blog.jpg",
    "Life Lessons and Messages": "https://miro.medium.com/max/4386/1*Y6E0MBrBaqIWekxmpQL-vg.jpeg",
    "Significant Life Event": "https://leonlogothetis.com/wp-content/uploads/2015/08/1773565-640x400.jpg",
    "Teen Years": "https://sites.google.com/site/keitolsm/_/rsrc/1472851927037/config/customLogo.gif?revision=4",
    "Holidays and Special events": "https://www.fasciagraphics.co.uk/upload/5499218f99283Christmas_5.jpg"
}

const css = {
    content: {
      padding: "3px",
    },

    size: {
        fontSize: "15px",
    }
    
  }


class MilestonesCreator extends Component {
    state = {
        menuOpen: false,
        anchor: null,
        editingItem: null,
    }

    openMenu = (event) => {
        this.setState({
            ...this.state,
            menuOpen: true,
            anchor: event.currentTarget
        })
    }


    onMenuClose = () => {
        this.setState({
            ...this.state,
            menuOpen: false,
        })
    }


    onItemClick = (event) => {
        const type= event.target.id;
  
    const newMilestone = {
        type,
        id: uuidv4(),
        content: typeToContent[type]
    }

    this.setState({
        ...this.state,
        menuOpen: false,
    })
    this.props.update.setMilestones([...this.props.data, newMilestone])
}

    deleteMilestone = id => {
        const newMilestones = this.props.data.filter(milestone => milestone.id !== id)
        this.props.update.setMilestones(newMilestones)
       
    }

    editItem = (id) => {
        this.setState({
            ...this.state,
            editingItem: this.props.data.find(milestone => milestone.id === id),
        })
    }

    closeEditItem = (id, data) => {
        const copy = [...this.props.data]
        copy.forEach((milestone, i) => {
            if (milestone.id === id) {
                copy[i] = { ...copy[i], data: { ...copy[i].data, ...data } }
            }
        })

        this.setState({
            ...this.state,
            editingItem: null,
        })

        this.props.update.setMilestones(copy)
    }

    render() {
        return (
            <div>
                <Fab variant="extended" aria-label="delete" color="primary" onClick={this.openMenu}>
                    <AddIcon />
                    Add Milestone
                </Fab>
                <AddMenu anchor={this.state.anchor} open={this.state.menuOpen} onMenuClose={this.onMenuClose} onItemClick={this.onItemClick}></AddMenu>
                <List component="nav" >
                    {this.props.data.map(milestone => (
                        <Box m={2}>
                        <Card >
                            <CardMedia
                            component="img"
                            image={typeToImage[milestone.type]}
                            height="140"
                            />
                            <CardContent style = {css.content}>
                                {/* <Typography gutterBottom variant="h5" component="h2">{milestone.data && milestone.data.name ? milestone.data.name : 'Untitled'}</Typography> */}
                                <Typography variant="body2" color="textSecondary"><i><b>{milestone.type}</b></i></Typography>
                                {milestone.data ? Object.keys(milestone.data).map(key => (
                                    <Typography style = {css.size}>{milestone.data[key]}</Typography>
                                )) : null}
                            </CardContent>

                            <CardActions style={{float:'right'}}>
                                <Button size="small" color="primary" onClick={() => this.editItem(milestone.id)}>Edit</Button>
                                <IconButton edge="end" aria-label="delete" onClick={() => this.deleteMilestone(milestone.id)}>
                                    <DeleteIcon />
                                </IconButton>                                
                            </CardActions>
                            
                        
                        </Card>
                        </Box>
                    ))}
                </List>
                <EditMilestoneDialog open={this.state.editingItem} handleClose={this.closeEditItem} ></EditMilestoneDialog>
            </div>
        )
    }
}

export default MilestonesCreator    