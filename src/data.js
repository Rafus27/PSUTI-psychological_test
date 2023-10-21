let userInfo = {
    gender: "",
    age: null,
    group: "",
    name: "",
    surname: "",
}

let answers = []

const data = [{ "id": 1, "question": "Если бы я сказал, что небо находится внизу, а зимой жарко, я должен был бы назвать преступника:", "answers": { "a": "бандитом", "b": "святым", "c": "тучей" } }, { "id": 2, "question": "Когда я ложусь спать, я:", "answers": { "a": "засыпаю быстро", "b": "нечто среднее", "c": "засыпаю с трудом" } }, { "id": 3, "question": "Если бы я вел машину по дороге, где много других машин, я предпочел бы:", "answers": { "a": "пропустить вперед большинство машин", "b": "не знаю", "c": "обогнать все идущие впереди машины" } }, { "id": 4, "question": "Мне важно, чтобы во всем, что меня окружает, не было беспорядка:", "answers": { "a": "верно", "b": "трудно сказать", "c": "неверно" } }, { "id": 5, "question": "Большинство людей, с которыми я бываю в компаниях, несомненно, рады меня видеть:", "answers": { "a": "верно", "b": "иногда", "c": "неверно" } }, { "id": 6, "question": "Я скорее бы занимался:", "answers": { "a": "фехтованием и танцами", "b": "затрудняюсь сказать", "c": "борьбой и баскетболом" } }, { "id": 7, "question": "Меня забавляет одно обстоятельство: то, что делают люди, совсем непохоже на то, что они потом рассказывают об этом:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 8, "question": "Когда друзья подшучивают надо мной, я обычно смеюсь со всеми и не обижаюсь:", "answers": { "a": "да", "b": "не знаю", "c": "нет" } }, { "id": 9, "question": "Если мне кто-нибудь нагрубит, я могу быстро забыть об этом:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 10, "question": "Мне больше нравятся новые способы выполнения какой-либо работы, чем придерживаться испытанных приемов:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 11, "question": "Когда я планирую что-нибудь, я предпочитаю делать это самостоятельно, без чьей-либо помощи:", "answers": { "a": "верно", "b": "иногда", "c": "нет" } }, { "id": 12, "question": "Я думаю, что я менее чувствительный и менее возбудимый, чем большинство людей:", "answers": { "a": "верно", "b": "затрудняюсь", "c": "неверно сказать" } }, { "id": 13, "question": "Меня раздражают люди, которые не могут быстро принимать решения:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 14, "question": "Я думаю, что слово, противоположное по смыслу слову «неточный», - это:", "answers": { "a": "небрежный", "b": "тщательный", "c": "приблизительный" } }, { "id": 15, "question": "У меня всегда хватает энергии, когда это мне необходимо:", "answers": { "a": "да", "b": "трудно сказать", "c": "нет" } }, { "id": 16, "question": "Меня больше всего раздражают люди, которые:", "answers": { "a": "своими грубыми шутками вгоняют людей в краску", "b": "затрудняюсь ответить", "c": "создают для меня неудобства, опаздывая на условленную встречу" } }, { "id": 17, "question": "Я думаю, что:", "answers": { "a": "не все надо делать одинаково тщательно", "b": "затрудняюсь ответить", "c": "любую работу надо выполнять тщательно, если вы за нее взялись" } }, { "id": 18, "question": "Мне всегда приходится преодолевать смущение:", "answers": { "a": "да", "b": "возможно", "c": "нет" } }, { "id": 19, "question": "Мои друзья чаще:", "answers": { "a": "советуются со мной", "b": "делают то и другое поровну", "c": "дают мне советы" } }, { "id": 20, "question": "Если приятель обманывает по мелочам, я скорее предпочитаю сделать вид, что не заметил этого, чем разоблачить его:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 21, "question": "Я не могу равнодушно слушать, как другие люди высказывают идеи, противоположные тем, в которые я твердо верю:", "answers": { "a": "верно", "b": "затрудняюсь", "c": "неверно ответить" } }, { "id": 22, "question": "Меня волнуют мои прошлые поступки и ошибки:", "answers": { "a": "да", "b": "не знаю", "c": "нет" } }, { "id": 23, "question": "Если бы я одинаково умел и то и другое, то я бы предпочел:", "answers": { "a": "играть в шахматы", "b": "трудно сказать", "c": "играть в городки" } }, { "id": 24, "question": "Мне нравятся общительные компанейские люди:", "answers": { "a": "да", "b": "не знаю", "c": "нет" } }, { "id": 25, "question": "Я настолько осторожен и практичен, что со мной случается меньше неприятных неожиданностей, чем с другими людьми:", "answers": { "a": "да", "b": "трудно сказать", "c": "нет" } }, { "id": 26, "question": "Я могу забыть о своих заботах и обязанностях, когда мне необходимо:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 27, "question": "Какое слово не связано с другими словами:", "answers": { "a": "кошка", "b": "близко", "c": "солнце" } }, { "id": 28, "question": "То, что в некоторой степени отвлекает мое внимание:", "answers": { "a": "раздражает меня", "b": "нечто среднее", "c": "не беспокоит меня совершенно" } }, { "id": 29, "question": "Если бы у меня было много денег, то я:", "answers": { "a": "позаботился бы о том, чтобы не вызывать к себе зависти", "b": "не знаю", "c": "жил бы, не стесняя себя ни в чем" } }, { "id": 30, "question": "Люди должны больше, чем они делают сейчас, требовать соблюдения законов морали:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 31, "question": "Мне говорили, что ребенком я был:", "answers": { "a": "спокойным и мог оставаться один", "b": "не знаю", "c": "живым и подвижным" } }, { "id": 32, "question": "Мне понравилась бы повседневная практическая работа с различными установками и машинами:", "answers": { "a": "да", "b": "не знаю", "c": "нет" } }, { "id": 33, "question": "Я думаю, что большинство свидетелей говорит правду, даже если это нелегко для них:", "answers": { "a": "да", "b": "трудно сказать", "c": "нет" } }, { "id": 34, "question": "Я стараюсь смеяться над шутками не так громко, как это делает большинство людей:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 35, "question": "Я никогда не чувствую себя таким несчастным, что хочется плакать:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 36, "question": "В музыке я наслаждаюсь:", "answers": { "a": "маршами в исполнении военных оркестров", "b": "не знаю", "c": "скрипичными соло" } }, { "id": 37, "question": "Я бы скорее предпочел провести летний месяц:", "answers": { "a": "в деревне с одним или двумя друзьями", "b": "затрудняюсь сказать", "c": "возглавляя группу в туристическом лагере" } }, { "id": 38, "question": "Усилия, затраченные на составление планов:", "answers": { "a": "никогда не лишние", "b": "трудно сказать", "c": "не стоят этого" } }, { "id": 39, "question": "Необдуманные поступки и высказывания моих приятелей в мой адрес не обижают и не огорчают меня:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 40, "question": "Дом так относится к комнате, как дерево к:", "answers": { "a": "лесу", "b": "растению", "c": "листу" } }, { "id": 41, "question": "То, что я делаю, у меня не получается:", "answers": { "a": "редко", "b": "иногда", "c": "часто" } }, { "id": 42, "question": "В большинстве дел я:", "answers": { "a": "предпочитаю рискнуть", "b": "не знаю", "c": "предпочитаю действовать наверняка" } }, { "id": 43, "question": "Мне больше нравится человек:", "answers": { "a": "большого ума, будь он даже ненадежен и непостоянен", "b": "трудно сказать", "c": "со средними способностями, но зато умеющий противостоять всяким соблазнам" } }, { "id": 44, "question": "Я принимаю решения:", "answers": { "a": "быстрее, чем большинство людей", "b": "не знаю", "c": "медленнее, чем другие люди" } }, { "id": 45, "question": "На меня большое впечатление производят:", "answers": { "a": "мастерство и изящество", "b": "трудно сказать", "c": "сила и мощь" } }, { "id": 46, "question": "Я считаю, что я человек, склонный к сотрудничеству:", "answers": { "a": "да", "b": "нечто среднее", "c": "нет" } }, { "id": 47, "question": "Я предпочитаю:", "answers": { "a": "решать вопросы, касающиеся лично меня, сам", "b": "затрудняюсь сказать", "c": "советоваться с друзьями" } }, { "id": 48, "question": "Если человек не отвечает сразу же после того, как я что-нибудь сказал ему, то я чувствую, что, должно быть, сказал какую-нибудь глупость:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 49, "question": "В школьные годы я больше всего получил знаний:", "answers": { "a": "на уроках", "b": "трудно сказать", "c": "читая книги" } }, { "id": 50, "question": "Я избегаю общественной работы и связанной с этим ответственности:", "answers": { "a": "верно", "b": "иногда", "c": "неверно" } }, { "id": 51, "question": "Когда вопрос, который надо решать, очень труден и требует от меня много усилий, я стараюсь:", "answers": { "a": "заняться другим вопросом", "b": "затрудняюсь ответить", "c": "еще раз попытаться решить этот вопрос" } }, { "id": 52, "question": "У меня возникают сильные эмоции: тревога, гнев, приступы смеха и т. п., казалось бы, без всякой причины:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 53, "question": "Я думаю, что правильное число, которое должно продолжить ряд - 1, 2, 3, 6, 5, будет:", "answers": { "a": "10", "b": "5", "c": "7" } }, { "id": 54, "question": "Иногда у меня бывают непродолжительные приступы тошноты и головокружения без определенной причины:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 55, "question": "Я предпочитаю скорее отказаться от своего заказа, чем доставить официанту лишнее беспокойство:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 56, "question": "На вечеринке мне нравится:", "answers": { "a": "принимать участие в интересной работе", "b": "затрудняюсь ответить", "c": "смотреть, как отдыхают люди, и просто отдыхать самому" } }, { "id": 57, "question": "Я высказываю свое мнение независимо от того, сколько людей могут его услышать:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 58, "question": "Если бы мог перенестись в прошлое, я бы больше хотел встретиться:", "answers": { "a": "с Колумбом", "b": "не знаю", "c": "с Пушкиным" } }, { "id": 59, "question": "Я вынужден удерживать себя от того, чтобы не улаживать чужие дела:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 60, "question": "Если люди думают обо мне плохо, я не стараюсь переубедить их, а продолжаю поступать так, как считаю нужным:", "answers": { "a": "да", "b": "трудно сказать", "c": "нет" } }, { "id": 61, "question": "Если я вижу, что старый друг холоден со мной и избегает меня, я обычно:", "answers": { "a": "сразу же думаю, что у него плохое настроение", "b": "не знаю", "c": "беспокоюсь о том, какой неверный поступок я совершил" } }, { "id": 62, "question": "Все несчастья происходят из-за людей:", "answers": { "a": "которые стараются во все внести изменения, хотя уже существуют удовлетворительные способы решения этих вопросов", "b": "не знаю", "c": "которые отвергают новые, многообещающие предложения" } }, { "id": 63, "question": "Я получаю большое удовольствие, рассказывая местные новости:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 64, "question": "Аккуратные, требовательные люди не уживаются со мной:", "answers": { "a": "верно", "b": "иногда", "c": "нет" } }, { "id": 65, "question": "Мне кажется, что я менее раздражительный, чем большинство людей:", "answers": { "a": "верно", "b": "не знаю", "c": "неверно" } }, { "id": 66, "question": "Если стрелки часов встречаются ровно через каждые 65 минут, отмеренные по точным часам, то эти часы:", "answers": { "a": "отстают", "b": "идут правильно", "c": "спешат" } }, { "id": 67, "question": "Мне бывает скучно:", "answers": { "a": "часто", "b": "иногда", "c": "редко" } }, { "id": 68, "question": "Люди говорят, что мне нравится делать все своими оригинальными способами:", "answers": { "a": "верно", "b": "иногда", "c": "нет" } }, { "id": 69, "question": "Дома в свободное время я:", "answers": { "a": "болтаю и отдыхаю", "b": "затрудняюсь ответить", "c": "занимаюсь интересующими меня делами" } }, { "id": 70, "question": "Я робко и осторожно отношусь к завязыванию дружеских отношений с новыми людьми:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 71, "question": "Я считаю: то, что люди произносят в стихах, можно точно так же выразить прозой:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 72, "question": "Я подозреваю, что люди, с которыми я нахожусь в дружеских отношениях, могут оказаться отнюдь не друзьями за моей спиной:", "answers": { "a": "да, в большинстве случаев", "b": "иногда", "c": "нет, редко" } }, { "id": 73, "question": "Я думаю, что интересно было бы быть:", "answers": { "a": "натуралистом, работать с растениями", "b": "не знаю", "c": "страховым агентом" } }, { "id": 74, "question": "Я подвержен беспричинному страху и отвращению по отношению к некоторым вещам, некоторым животным:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 75, "question": "Я люблю размышлять о том, как можно улучшить мир:", "answers": { "a": "да", "b": "трудно сказать", "c": "нет" } }, { "id": 76, "question": "Я предпочитаю игры:", "answers": { "a": "где надо играть в команде или иметь партнера", "b": "не знаю", "c": "где каждый играет сам за себя" } }, { "id": 77, "question": "Ночью мне снятся фантастические или нелепые сны:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 78, "question": "Если я остаюсь дома один, то через некоторое время ощущаю тревогу и страх:", "answers": { "a": "да", "b": "иногда", "c": "нет" } }, { "id": 79, "question": "Если мать Марии является сестрой отца Александра, то кем является Александр по отношению к отцу Марии?", "answers": { "a": "двоюродным братом", "b": "племянником", "c": "дядей" } }]

export { userInfo, answers, data }