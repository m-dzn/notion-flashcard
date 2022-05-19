/** Copyright ⓒ 2021 notion-sdk-js by Notion Labs, Inc.
 * @License MIT
 * @Website https://developers.notion.com/docs
 * @GitHub https://github.com/makenotion/notion-sdk-js
 */

export type EmojiRequest =
  | "😀"
  | "😃"
  | "😄"
  | "😁"
  | "😆"
  | "😅"
  | "🤣"
  | "😂"
  | "🙂"
  | "🙃"
  | "😉"
  | "😊"
  | "😇"
  | "🥰"
  | "😍"
  | "🤩"
  | "😘"
  | "😗"
  | "☺️"
  | "☺"
  | "😚"
  | "😙"
  | "🥲"
  | "😋"
  | "😛"
  | "😜"
  | "🤪"
  | "😝"
  | "🤑"
  | "🤗"
  | "🤭"
  | "🤫"
  | "🤔"
  | "🤐"
  | "🤨"
  | "😐"
  | "😑"
  | "😶"
  | "😶‍🌫️"
  | "😶‍🌫"
  | "😏"
  | "😒"
  | "🙄"
  | "😬"
  | "😮‍💨"
  | "🤥"
  | "😌"
  | "😔"
  | "😪"
  | "🤤"
  | "😴"
  | "😷"
  | "🤒"
  | "🤕"
  | "🤢"
  | "🤮"
  | "🤧"
  | "🥵"
  | "🥶"
  | "🥴"
  | "😵"
  | "😵‍💫"
  | "🤯"
  | "🤠"
  | "🥳"
  | "🥸"
  | "😎"
  | "🤓"
  | "🧐"
  | "😕"
  | "😟"
  | "🙁"
  | "☹️"
  | "☹"
  | "😮"
  | "😯"
  | "😲"
  | "😳"
  | "🥺"
  | "😦"
  | "😧"
  | "😨"
  | "😰"
  | "😥"
  | "😢"
  | "😭"
  | "😱"
  | "😖"
  | "😣"
  | "😞"
  | "😓"
  | "😩"
  | "😫"
  | "🥱"
  | "😤"
  | "😡"
  | "😠"
  | "🤬"
  | "😈"
  | "👿"
  | "💀"
  | "☠️"
  | "☠"
  | "💩"
  | "🤡"
  | "👹"
  | "👺"
  | "👻"
  | "👽"
  | "👾"
  | "🤖"
  | "😺"
  | "😸"
  | "😹"
  | "😻"
  | "😼"
  | "😽"
  | "🙀"
  | "😿"
  | "😾"
  | "🙈"
  | "🙉"
  | "🙊"
  | "💋"
  | "💌"
  | "💘"
  | "💝"
  | "💖"
  | "💗"
  | "💓"
  | "💞"
  | "💕"
  | "💟"
  | "❣️"
  | "❣"
  | "💔"
  | "❤️‍🔥"
  | "❤‍🔥"
  | "❤️‍🩹"
  | "❤‍🩹"
  | "❤️"
  | "❤"
  | "🧡"
  | "💛"
  | "💚"
  | "💙"
  | "💜"
  | "🤎"
  | "🖤"
  | "🤍"
  | "💯"
  | "💢"
  | "💥"
  | "💫"
  | "💦"
  | "💨"
  | "🕳️"
  | "🕳"
  | "💣"
  | "💬"
  | "👁️‍🗨️"
  | "🗨️"
  | "🗨"
  | "🗯️"
  | "🗯"
  | "💭"
  | "💤"
  | "👋🏻"
  | "👋🏼"
  | "👋🏽"
  | "👋🏾"
  | "👋🏿"
  | "👋"
  | "🤚🏻"
  | "🤚🏼"
  | "🤚🏽"
  | "🤚🏾"
  | "🤚🏿"
  | "🤚"
  | "🖐🏻"
  | "🖐🏼"
  | "🖐🏽"
  | "🖐🏾"
  | "🖐🏿"
  | "🖐️"
  | "🖐"
  | "✋🏻"
  | "✋🏼"
  | "✋🏽"
  | "✋🏾"
  | "✋🏿"
  | "✋"
  | "🖖🏻"
  | "🖖🏼"
  | "🖖🏽"
  | "🖖🏾"
  | "🖖🏿"
  | "🖖"
  | "👌🏻"
  | "👌🏼"
  | "👌🏽"
  | "👌🏾"
  | "👌🏿"
  | "👌"
  | "🤌🏻"
  | "🤌🏼"
  | "🤌🏽"
  | "🤌🏾"
  | "🤌🏿"
  | "🤌"
  | "🤏🏻"
  | "🤏🏼"
  | "🤏🏽"
  | "🤏🏾"
  | "🤏🏿"
  | "🤏"
  | "✌🏻"
  | "✌🏼"
  | "✌🏽"
  | "✌🏾"
  | "✌🏿"
  | "✌️"
  | "✌"
  | "🤞🏻"
  | "🤞🏼"
  | "🤞🏽"
  | "🤞🏾"
  | "🤞🏿"
  | "🤞"
  | "🤟🏻"
  | "🤟🏼"
  | "🤟🏽"
  | "🤟🏾"
  | "🤟🏿"
  | "🤟"
  | "🤘🏻"
  | "🤘🏼"
  | "🤘🏽"
  | "🤘🏾"
  | "🤘🏿"
  | "🤘"
  | "🤙🏻"
  | "🤙🏼"
  | "🤙🏽"
  | "🤙🏾"
  | "🤙🏿"
  | "🤙"
  | "👈🏻"
  | "👈🏼"
  | "👈🏽"
  | "👈🏾"
  | "👈🏿"
  | "👈"
  | "👉🏻"
  | "👉🏼"
  | "👉🏽"
  | "👉🏾"
  | "👉🏿"
  | "👉"
  | "👆🏻"
  | "👆🏼"
  | "👆🏽"
  | "👆🏾"
  | "👆🏿"
  | "👆"
  | "🖕🏻"
  | "🖕🏼"
  | "🖕🏽"
  | "🖕🏾"
  | "🖕🏿"
  | "🖕"
  | "👇🏻"
  | "👇🏼"
  | "👇🏽"
  | "👇🏾"
  | "👇🏿"
  | "👇"
  | "☝🏻"
  | "☝🏼"
  | "☝🏽"
  | "☝🏾"
  | "☝🏿"
  | "☝️"
  | "☝"
  | "👍🏻"
  | "👍🏼"
  | "👍🏽"
  | "👍🏾"
  | "👍🏿"
  | "👍"
  | "👎🏻"
  | "👎🏼"
  | "👎🏽"
  | "👎🏾"
  | "👎🏿"
  | "👎"
  | "✊🏻"
  | "✊🏼"
  | "✊🏽"
  | "✊🏾"
  | "✊🏿"
  | "✊"
  | "👊🏻"
  | "👊🏼"
  | "👊🏽"
  | "👊🏾"
  | "👊🏿"
  | "👊"
  | "🤛🏻"
  | "🤛🏼"
  | "🤛🏽"
  | "🤛🏾"
  | "🤛🏿"
  | "🤛"
  | "🤜🏻"
  | "🤜🏼"
  | "🤜🏽"
  | "🤜🏾"
  | "🤜🏿"
  | "🤜"
  | "👏🏻"
  | "👏🏼"
  | "👏🏽"
  | "👏🏾"
  | "👏🏿"
  | "👏"
  | "🙌🏻"
  | "🙌🏼"
  | "🙌🏽"
  | "🙌🏾"
  | "🙌🏿"
  | "🙌"
  | "👐🏻"
  | "👐🏼"
  | "👐🏽"
  | "👐🏾"
  | "👐🏿"
  | "👐"
  | "🤲🏻"
  | "🤲🏼"
  | "🤲🏽"
  | "🤲🏾"
  | "🤲🏿"
  | "🤲"
  | "🤝"
  | "🙏🏻"
  | "🙏🏼"
  | "🙏🏽"
  | "🙏🏾"
  | "🙏🏿"
  | "🙏"
  | "✍🏻"
  | "✍🏼"
  | "✍🏽"
  | "✍🏾"
  | "✍🏿"
  | "✍️"
  | "✍"
  | "💅🏻"
  | "💅🏼"
  | "💅🏽"
  | "💅🏾"
  | "💅🏿"
  | "💅"
  | "🤳🏻"
  | "🤳🏼"
  | "🤳🏽"
  | "🤳🏾"
  | "🤳🏿"
  | "🤳"
  | "💪🏻"
  | "💪🏼"
  | "💪🏽"
  | "💪🏾"
  | "💪🏿"
  | "💪"
  | "🦾"
  | "🦿"
  | "🦵🏻"
  | "🦵🏼"
  | "🦵🏽"
  | "🦵🏾"
  | "🦵🏿"
  | "🦵"
  | "🦶🏻"
  | "🦶🏼"
  | "🦶🏽"
  | "🦶🏾"
  | "🦶🏿"
  | "🦶"
  | "👂🏻"
  | "👂🏼"
  | "👂🏽"
  | "👂🏾"
  | "👂🏿"
  | "👂"
  | "🦻🏻"
  | "🦻🏼"
  | "🦻🏽"
  | "🦻🏾"
  | "🦻🏿"
  | "🦻"
  | "👃🏻"
  | "👃🏼"
  | "👃🏽"
  | "👃🏾"
  | "👃🏿"
  | "👃"
  | "🧠"
  | "🫀"
  | "🫁"
  | "🦷"
  | "🦴"
  | "👀"
  | "👁️"
  | "👁"
  | "👅"
  | "👄"
  | "👶🏻"
  | "👶🏼"
  | "👶🏽"
  | "👶🏾"
  | "👶🏿"
  | "👶"
  | "🧒🏻"
  | "🧒🏼"
  | "🧒🏽"
  | "🧒🏾"
  | "🧒🏿"
  | "🧒"
  | "👦🏻"
  | "👦🏼"
  | "👦🏽"
  | "👦🏾"
  | "👦🏿"
  | "👦"
  | "👧🏻"
  | "👧🏼"
  | "👧🏽"
  | "👧🏾"
  | "👧🏿"
  | "👧"
  | "🧑🏻"
  | "🧑🏼"
  | "🧑🏽"
  | "🧑🏾"
  | "🧑🏿"
  | "🧑"
  | "👱🏻"
  | "👱🏼"
  | "👱🏽"
  | "👱🏾"
  | "👱🏿"
  | "👱"
  | "👨🏻"
  | "👨🏼"
  | "👨🏽"
  | "👨🏾"
  | "👨🏿"
  | "👨"
  | "🧔🏻"
  | "🧔🏼"
  | "🧔🏽"
  | "🧔🏾"
  | "🧔🏿"
  | "🧔"
  | "🧔🏻‍♂️"
  | "🧔🏼‍♂️"
  | "🧔🏽‍♂️"
  | "🧔🏾‍♂️"
  | "🧔🏿‍♂️"
  | "🧔‍♂️"
  | "🧔‍♂"
  | "🧔🏻‍♀️"
  | "🧔🏼‍♀️"
  | "🧔🏽‍♀️"
  | "🧔🏾‍♀️"
  | "🧔🏿‍♀️"
  | "🧔‍♀️"
  | "🧔‍♀"
  | "👨🏻‍🦰"
  | "👨🏼‍🦰"
  | "👨🏽‍🦰"
  | "👨🏾‍🦰"
  | "👨🏿‍🦰"
  | "👨‍🦰"
  | "👨🏻‍🦱"
  | "👨🏼‍🦱"
  | "👨🏽‍🦱"
  | "👨🏾‍🦱"
  | "👨🏿‍🦱"
  | "👨‍🦱"
  | "👨🏻‍🦳"
  | "👨🏼‍🦳"
  | "👨🏽‍🦳"
  | "👨🏾‍🦳"
  | "👨🏿‍🦳"
  | "👨‍🦳"
  | "👨🏻‍🦲"
  | "👨🏼‍🦲"
  | "👨🏽‍🦲"
  | "👨🏾‍🦲"
  | "👨🏿‍🦲"
  | "👨‍🦲"
  | "👩🏻"
  | "👩🏼"
  | "👩🏽"
  | "👩🏾"
  | "👩🏿"
  | "👩"
  | "👩🏻‍🦰"
  | "👩🏼‍🦰"
  | "👩🏽‍🦰"
  | "👩🏾‍🦰"
  | "👩🏿‍🦰"
  | "👩‍🦰"
  | "🧑🏻‍🦰"
  | "🧑🏼‍🦰"
  | "🧑🏽‍🦰"
  | "🧑🏾‍🦰"
  | "🧑🏿‍🦰"
  | "🧑‍🦰"
  | "👩🏻‍🦱"
  | "👩🏼‍🦱"
  | "👩🏽‍🦱"
  | "👩🏾‍🦱"
  | "👩🏿‍🦱"
  | "👩‍🦱"
  | "🧑🏻‍🦱"
  | "🧑🏼‍🦱"
  | "🧑🏽‍🦱"
  | "🧑🏾‍🦱"
  | "🧑🏿‍🦱"
  | "🧑‍🦱"
  | "👩🏻‍🦳"
  | "👩🏼‍🦳"
  | "👩🏽‍🦳"
  | "👩🏾‍🦳"
  | "👩🏿‍🦳"
  | "👩‍🦳"
  | "🧑🏻‍🦳"
  | "🧑🏼‍🦳"
  | "🧑🏽‍🦳"
  | "🧑🏾‍🦳"
  | "🧑🏿‍🦳"
  | "🧑‍🦳"
  | "👩🏻‍🦲"
  | "👩🏼‍🦲"
  | "👩🏽‍🦲"
  | "👩🏾‍🦲"
  | "👩🏿‍🦲"
  | "👩‍🦲"
  | "🧑🏻‍🦲"
  | "🧑🏼‍🦲"
  | "🧑🏽‍🦲"
  | "🧑🏾‍🦲"
  | "🧑🏿‍🦲"
  | "🧑‍🦲"
  | "👱🏻‍♀️"
  | "👱🏼‍♀️"
  | "👱🏽‍♀️"
  | "👱🏾‍♀️"
  | "👱🏿‍♀️"
  | "👱‍♀️"
  | "👱‍♀"
  | "👱🏻‍♂️"
  | "👱🏼‍♂️"
  | "👱🏽‍♂️"
  | "👱🏾‍♂️"
  | "👱🏿‍♂️"
  | "👱‍♂️"
  | "👱‍♂"
  | "🧓🏻"
  | "🧓🏼"
  | "🧓🏽"
  | "🧓🏾"
  | "🧓🏿"
  | "🧓"
  | "👴🏻"
  | "👴🏼"
  | "👴🏽"
  | "👴🏾"
  | "👴🏿"
  | "👴"
  | "👵🏻"
  | "👵🏼"
  | "👵🏽"
  | "👵🏾"
  | "👵🏿"
  | "👵"
  | "🙍🏻"
  | "🙍🏼"
  | "🙍🏽"
  | "🙍🏾"
  | "🙍🏿"
  | "🙍"
  | "🙍🏻‍♂️"
  | "🙍🏼‍♂️"
  | "🙍🏽‍♂️"
  | "🙍🏾‍♂️"
  | "🙍🏿‍♂️"
  | "🙍‍♂️"
  | "🙍‍♂"
  | "🙍🏻‍♀️"
  | "🙍🏼‍♀️"
  | "🙍🏽‍♀️"
  | "🙍🏾‍♀️"
  | "🙍🏿‍♀️"
  | "🙍‍♀️"
  | "🙍‍♀"
  | "🙎🏻"
  | "🙎🏼"
  | "🙎🏽"
  | "🙎🏾"
  | "🙎🏿"
  | "🙎"
  | "🙎🏻‍♂️"
  | "🙎🏼‍♂️"
  | "🙎🏽‍♂️"
  | "🙎🏾‍♂️"
  | "🙎🏿‍♂️"
  | "🙎‍♂️"
  | "🙎‍♂"
  | "🙎🏻‍♀️"
  | "🙎🏼‍♀️"
  | "🙎🏽‍♀️"
  | "🙎🏾‍♀️"
  | "🙎🏿‍♀️"
  | "🙎‍♀️"
  | "🙎‍♀"
  | "🙅🏻"
  | "🙅🏼"
  | "🙅🏽"
  | "🙅🏾"
  | "🙅🏿"
  | "🙅"
  | "🙅🏻‍♂️"
  | "🙅🏼‍♂️"
  | "🙅🏽‍♂️"
  | "🙅🏾‍♂️"
  | "🙅🏿‍♂️"
  | "🙅‍♂️"
  | "🙅‍♂"
  | "🙅🏻‍♀️"
  | "🙅🏼‍♀️"
  | "🙅🏽‍♀️"
  | "🙅🏾‍♀️"
  | "🙅🏿‍♀️"
  | "🙅‍♀️"
  | "🙅‍♀"
  | "🙆🏻"
  | "🙆🏼"
  | "🙆🏽"
  | "🙆🏾"
  | "🙆🏿"
  | "🙆"
  | "🙆🏻‍♂️"
  | "🙆🏼‍♂️"
  | "🙆🏽‍♂️"
  | "🙆🏾‍♂️"
  | "🙆🏿‍♂️"
  | "🙆‍♂️"
  | "🙆‍♂"
  | "🙆🏻‍♀️"
  | "🙆🏼‍♀️"
  | "🙆🏽‍♀️"
  | "🙆🏾‍♀️"
  | "🙆🏿‍♀️"
  | "🙆‍♀️"
  | "🙆‍♀"
  | "💁🏻"
  | "💁🏼"
  | "💁🏽"
  | "💁🏾"
  | "💁🏿"
  | "💁"
  | "💁🏻‍♂️"
  | "💁🏼‍♂️"
  | "💁🏽‍♂️"
  | "💁🏾‍♂️"
  | "💁🏿‍♂️"
  | "💁‍♂️"
  | "💁‍♂"
  | "💁🏻‍♀️"
  | "💁🏼‍♀️"
  | "💁🏽‍♀️"
  | "💁🏾‍♀️"
  | "💁🏿‍♀️"
  | "💁‍♀️"
  | "💁‍♀"
  | "🙋🏻"
  | "🙋🏼"
  | "🙋🏽"
  | "🙋🏾"
  | "🙋🏿"
  | "🙋"
  | "🙋🏻‍♂️"
  | "🙋🏼‍♂️"
  | "🙋🏽‍♂️"
  | "🙋🏾‍♂️"
  | "🙋🏿‍♂️"
  | "🙋‍♂️"
  | "🙋‍♂"
  | "🙋🏻‍♀️"
  | "🙋🏼‍♀️"
  | "🙋🏽‍♀️"
  | "🙋🏾‍♀️"
  | "🙋🏿‍♀️"
  | "🙋‍♀️"
  | "🙋‍♀"
  | "🧏🏻"
  | "🧏🏼"
  | "🧏🏽"
  | "🧏🏾"
  | "🧏🏿"
  | "🧏"
  | "🧏🏻‍♂️"
  | "🧏🏼‍♂️"
  | "🧏🏽‍♂️"
  | "🧏🏾‍♂️"
  | "🧏🏿‍♂️"
  | "🧏‍♂️"
  | "🧏‍♂"
  | "🧏🏻‍♀️"
  | "🧏🏼‍♀️"
  | "🧏🏽‍♀️"
  | "🧏🏾‍♀️"
  | "🧏🏿‍♀️"
  | "🧏‍♀️"
  | "🧏‍♀"
  | "🙇🏻"
  | "🙇🏼"
  | "🙇🏽"
  | "🙇🏾"
  | "🙇🏿"
  | "🙇"
  | "🙇🏻‍♂️"
  | "🙇🏼‍♂️"
  | "🙇🏽‍♂️"
  | "🙇🏾‍♂️"
  | "🙇🏿‍♂️"
  | "🙇‍♂️"
  | "🙇‍♂"
  | "🙇🏻‍♀️"
  | "🙇🏼‍♀️"
  | "🙇🏽‍♀️"
  | "🙇🏾‍♀️"
  | "🙇🏿‍♀️"
  | "🙇‍♀️"
  | "🙇‍♀"
  | "🤦🏻"
  | "🤦🏼"
  | "🤦🏽"
  | "🤦🏾"
  | "🤦🏿"
  | "🤦"
  | "🤦🏻‍♂️"
  | "🤦🏼‍♂️"
  | "🤦🏽‍♂️"
  | "🤦🏾‍♂️"
  | "🤦🏿‍♂️"
  | "🤦‍♂️"
  | "🤦‍♂"
  | "🤦🏻‍♀️"
  | "🤦🏼‍♀️"
  | "🤦🏽‍♀️"
  | "🤦🏾‍♀️"
  | "🤦🏿‍♀️"
  | "🤦‍♀️"
  | "🤦‍♀"
  | "🤷🏻"
  | "🤷🏼"
  | "🤷🏽"
  | "🤷🏾"
  | "🤷🏿"
  | "🤷"
  | "🤷🏻‍♂️"
  | "🤷🏼‍♂️"
  | "🤷🏽‍♂️"
  | "🤷🏾‍♂️"
  | "🤷🏿‍♂️"
  | "🤷‍♂️"
  | "🤷‍♂"
  | "🤷🏻‍♀️"
  | "🤷🏼‍♀️"
  | "🤷🏽‍♀️"
  | "🤷🏾‍♀️"
  | "🤷🏿‍♀️"
  | "🤷‍♀️"
  | "🤷‍♀"
  | "🧑🏻‍⚕️"
  | "🧑🏼‍⚕️"
  | "🧑🏽‍⚕️"
  | "🧑🏾‍⚕️"
  | "🧑🏿‍⚕️"
  | "🧑‍⚕️"
  | "🧑‍⚕"
  | "👨🏻‍⚕️"
  | "👨🏼‍⚕️"
  | "👨🏽‍⚕️"
  | "👨🏾‍⚕️"
  | "👨🏿‍⚕️"
  | "👨‍⚕️"
  | "👨‍⚕"
  | "👩🏻‍⚕️"
  | "👩🏼‍⚕️"
  | "👩🏽‍⚕️"
  | "👩🏾‍⚕️"
  | "👩🏿‍⚕️"
  | "👩‍⚕️"
  | "👩‍⚕"
  | "🧑🏻‍🎓"
  | "🧑🏼‍🎓"
  | "🧑🏽‍🎓"
  | "🧑🏾‍🎓"
  | "🧑🏿‍🎓"
  | "🧑‍🎓"
  | "👨🏻‍🎓"
  | "👨🏼‍🎓"
  | "👨🏽‍🎓"
  | "👨🏾‍🎓"
  | "👨🏿‍🎓"
  | "👨‍🎓"
  | "👩🏻‍🎓"
  | "👩🏼‍🎓"
  | "👩🏽‍🎓"
  | "👩🏾‍🎓"
  | "👩🏿‍🎓"
  | "👩‍🎓"
  | "🧑🏻‍🏫"
  | "🧑🏼‍🏫"
  | "🧑🏽‍🏫"
  | "🧑🏾‍🏫"
  | "🧑🏿‍🏫"
  | "🧑‍🏫"
  | "👨🏻‍🏫"
  | "👨🏼‍🏫"
  | "👨🏽‍🏫"
  | "👨🏾‍🏫"
  | "👨🏿‍🏫"
  | "👨‍🏫"
  | "👩🏻‍🏫"
  | "👩🏼‍🏫"
  | "👩🏽‍🏫"
  | "👩🏾‍🏫"
  | "👩🏿‍🏫"
  | "👩‍🏫"
  | "🧑🏻‍⚖️"
  | "🧑🏼‍⚖️"
  | "🧑🏽‍⚖️"
  | "🧑🏾‍⚖️"
  | "🧑🏿‍⚖️"
  | "🧑‍⚖️"
  | "🧑‍⚖"
  | "👨🏻‍⚖️"
  | "👨🏼‍⚖️"
  | "👨🏽‍⚖️"
  | "👨🏾‍⚖️"
  | "👨🏿‍⚖️"
  | "👨‍⚖️"
  | "👨‍⚖"
  | "👩🏻‍⚖️"
  | "👩🏼‍⚖️"
  | "👩🏽‍⚖️"
  | "👩🏾‍⚖️"
  | "👩🏿‍⚖️"
  | "👩‍⚖️"
  | "👩‍⚖"
  | "🧑🏻‍🌾"
  | "🧑🏼‍🌾"
  | "🧑🏽‍🌾"
  | "🧑🏾‍🌾"
  | "🧑🏿‍🌾"
  | "🧑‍🌾"
  | "👨🏻‍🌾"
  | "👨🏼‍🌾"
  | "👨🏽‍🌾"
  | "👨🏾‍🌾"
  | "👨🏿‍🌾"
  | "👨‍🌾"
  | "👩🏻‍🌾"
  | "👩🏼‍🌾"
  | "👩🏽‍🌾"
  | "👩🏾‍🌾"
  | "👩🏿‍🌾"
  | "👩‍🌾"
  | "🧑🏻‍🍳"
  | "🧑🏼‍🍳"
  | "🧑🏽‍🍳"
  | "🧑🏾‍🍳"
  | "🧑🏿‍🍳"
  | "🧑‍🍳"
  | "👨🏻‍🍳"
  | "👨🏼‍🍳"
  | "👨🏽‍🍳"
  | "👨🏾‍🍳"
  | "👨🏿‍🍳"
  | "👨‍🍳"
  | "👩🏻‍🍳"
  | "👩🏼‍🍳"
  | "👩🏽‍🍳"
  | "👩🏾‍🍳"
  | "👩🏿‍🍳"
  | "👩‍🍳"
  | "🧑🏻‍🔧"
  | "🧑🏼‍🔧"
  | "🧑🏽‍🔧"
  | "🧑🏾‍🔧"
  | "🧑🏿‍🔧"
  | "🧑‍🔧"
  | "👨🏻‍🔧"
  | "👨🏼‍🔧"
  | "👨🏽‍🔧"
  | "👨🏾‍🔧"
  | "👨🏿‍🔧"
  | "👨‍🔧"
  | "👩🏻‍🔧"
  | "👩🏼‍🔧"
  | "👩🏽‍🔧"
  | "👩🏾‍🔧"
  | "👩🏿‍🔧"
  | "👩‍🔧"
  | "🧑🏻‍🏭"
  | "🧑🏼‍🏭"
  | "🧑🏽‍🏭"
  | "🧑🏾‍🏭"
  | "🧑🏿‍🏭"
  | "🧑‍🏭"
  | "👨🏻‍🏭"
  | "👨🏼‍🏭"
  | "👨🏽‍🏭"
  | "👨🏾‍🏭"
  | "👨🏿‍🏭"
  | "👨‍🏭"
  | "👩🏻‍🏭"
  | "👩🏼‍🏭"
  | "👩🏽‍🏭"
  | "👩🏾‍🏭"
  | "👩🏿‍🏭"
  | "👩‍🏭"
  | "🧑🏻‍💼"
  | "🧑🏼‍💼"
  | "🧑🏽‍💼"
  | "🧑🏾‍💼"
  | "🧑🏿‍💼"
  | "🧑‍💼"
  | "👨🏻‍💼"
  | "👨🏼‍💼"
  | "👨🏽‍💼"
  | "👨🏾‍💼"
  | "👨🏿‍💼"
  | "👨‍💼"
  | "👩🏻‍💼"
  | "👩🏼‍💼"
  | "👩🏽‍💼"
  | "👩🏾‍💼"
  | "👩🏿‍💼"
  | "👩‍💼"
  | "🧑🏻‍🔬"
  | "🧑🏼‍🔬"
  | "🧑🏽‍🔬"
  | "🧑🏾‍🔬"
  | "🧑🏿‍🔬"
  | "🧑‍🔬"
  | "👨🏻‍🔬"
  | "👨🏼‍🔬"
  | "👨🏽‍🔬"
  | "👨🏾‍🔬"
  | "👨🏿‍🔬"
  | "👨‍🔬"
  | "👩🏻‍🔬"
  | "👩🏼‍🔬"
  | "👩🏽‍🔬"
  | "👩🏾‍🔬"
  | "👩🏿‍🔬"
  | "👩‍🔬"
  | "🧑🏻‍💻"
  | "🧑🏼‍💻"
  | "🧑🏽‍💻"
  | "🧑🏾‍💻"
  | "🧑🏿‍💻"
  | "🧑‍💻"
  | "👨🏻‍💻"
  | "👨🏼‍💻"
  | "👨🏽‍💻"
  | "👨🏾‍💻"
  | "👨🏿‍💻"
  | "👨‍💻"
  | "👩🏻‍💻"
  | "👩🏼‍💻"
  | "👩🏽‍💻"
  | "👩🏾‍💻"
  | "👩🏿‍💻"
  | "👩‍💻"
  | "🧑🏻‍🎤"
  | "🧑🏼‍🎤"
  | "🧑🏽‍🎤"
  | "🧑🏾‍🎤"
  | "🧑🏿‍🎤"
  | "🧑‍🎤"
  | "👨🏻‍🎤"
  | "👨🏼‍🎤"
  | "👨🏽‍🎤"
  | "👨🏾‍🎤"
  | "👨🏿‍🎤"
  | "👨‍🎤"
  | "👩🏻‍🎤"
  | "👩🏼‍🎤"
  | "👩🏽‍🎤"
  | "👩🏾‍🎤"
  | "👩🏿‍🎤"
  | "👩‍🎤"
  | "🧑🏻‍🎨"
  | "🧑🏼‍🎨"
  | "🧑🏽‍🎨"
  | "🧑🏾‍🎨"
  | "🧑🏿‍🎨"
  | "🧑‍🎨"
  | "👨🏻‍🎨"
  | "👨🏼‍🎨"
  | "👨🏽‍🎨"
  | "👨🏾‍🎨"
  | "👨🏿‍🎨"
  | "👨‍🎨"
  | "👩🏻‍🎨"
  | "👩🏼‍🎨"
  | "👩🏽‍🎨"
  | "👩🏾‍🎨"
  | "👩🏿‍🎨"
  | "👩‍🎨"
  | "🧑🏻‍✈️"
  | "🧑🏼‍✈️"
  | "🧑🏽‍✈️"
  | "🧑🏾‍✈️"
  | "🧑🏿‍✈️"
  | "🧑‍✈️"
  | "🧑‍✈"
  | "👨🏻‍✈️"
  | "👨🏼‍✈️"
  | "👨🏽‍✈️"
  | "👨🏾‍✈️"
  | "👨🏿‍✈️"
  | "👨‍✈️"
  | "👨‍✈"
  | "👩🏻‍✈️"
  | "👩🏼‍✈️"
  | "👩🏽‍✈️"
  | "👩🏾‍✈️"
  | "👩🏿‍✈️"
  | "👩‍✈️"
  | "👩‍✈"
  | "🧑🏻‍🚀"
  | "🧑🏼‍🚀"
  | "🧑🏽‍🚀"
  | "🧑🏾‍🚀"
  | "🧑🏿‍🚀"
  | "🧑‍🚀"
  | "👨🏻‍🚀"
  | "👨🏼‍🚀"
  | "👨🏽‍🚀"
  | "👨🏾‍🚀"
  | "👨🏿‍🚀"
  | "👨‍🚀"
  | "👩🏻‍🚀"
  | "👩🏼‍🚀"
  | "👩🏽‍🚀"
  | "👩🏾‍🚀"
  | "👩🏿‍🚀"
  | "👩‍🚀"
  | "🧑🏻‍🚒"
  | "🧑🏼‍🚒"
  | "🧑🏽‍🚒"
  | "🧑🏾‍🚒"
  | "🧑🏿‍🚒"
  | "🧑‍🚒"
  | "👨🏻‍🚒"
  | "👨🏼‍🚒"
  | "👨🏽‍🚒"
  | "👨🏾‍🚒"
  | "👨🏿‍🚒"
  | "👨‍🚒"
  | "👩🏻‍🚒"
  | "👩🏼‍🚒"
  | "👩🏽‍🚒"
  | "👩🏾‍🚒"
  | "👩🏿‍🚒"
  | "👩‍🚒"
  | "👮🏻"
  | "👮🏼"
  | "👮🏽"
  | "👮🏾"
  | "👮🏿"
  | "👮"
  | "👮🏻‍♂️"
  | "👮🏼‍♂️"
  | "👮🏽‍♂️"
  | "👮🏾‍♂️"
  | "👮🏿‍♂️"
  | "👮‍♂️"
  | "👮‍♂"
  | "👮🏻‍♀️"
  | "👮🏼‍♀️"
  | "👮🏽‍♀️"
  | "👮🏾‍♀️"
  | "👮🏿‍♀️"
  | "👮‍♀️"
  | "👮‍♀"
  | "🕵🏻"
  | "🕵🏼"
  | "🕵🏽"
  | "🕵🏾"
  | "🕵🏿"
  | "🕵️"
  | "🕵"
  | "🕵🏻‍♂️"
  | "🕵🏼‍♂️"
  | "🕵🏽‍♂️"
  | "🕵🏾‍♂️"
  | "🕵🏿‍♂️"
  | "🕵️‍♂️"
  | "🕵🏻‍♀️"
  | "🕵🏼‍♀️"
  | "🕵🏽‍♀️"
  | "🕵🏾‍♀️"
  | "🕵🏿‍♀️"
  | "🕵️‍♀️"
  | "💂🏻"
  | "💂🏼"
  | "💂🏽"
  | "💂🏾"
  | "💂🏿"
  | "💂"
  | "💂🏻‍♂️"
  | "💂🏼‍♂️"
  | "💂🏽‍♂️"
  | "💂🏾‍♂️"
  | "💂🏿‍♂️"
  | "💂‍♂️"
  | "💂‍♂"
  | "💂🏻‍♀️"
  | "💂🏼‍♀️"
  | "💂🏽‍♀️"
  | "💂🏾‍♀️"
  | "💂🏿‍♀️"
  | "💂‍♀️"
  | "💂‍♀"
  | "🥷🏻"
  | "🥷🏼"
  | "🥷🏽"
  | "🥷🏾"
  | "🥷🏿"
  | "🥷"
  | "👷🏻"
  | "👷🏼"
  | "👷🏽"
  | "👷🏾"
  | "👷🏿"
  | "👷"
  | "👷🏻‍♂️"
  | "👷🏼‍♂️"
  | "👷🏽‍♂️"
  | "👷🏾‍♂️"
  | "👷🏿‍♂️"
  | "👷‍♂️"
  | "👷‍♂"
  | "👷🏻‍♀️"
  | "👷🏼‍♀️"
  | "👷🏽‍♀️"
  | "👷🏾‍♀️"
  | "👷🏿‍♀️"
  | "👷‍♀️"
  | "👷‍♀"
  | "🤴🏻"
  | "🤴🏼"
  | "🤴🏽"
  | "🤴🏾"
  | "🤴🏿"
  | "🤴"
  | "👸🏻"
  | "👸🏼"
  | "👸🏽"
  | "👸🏾"
  | "👸🏿"
  | "👸"
  | "👳🏻"
  | "👳🏼"
  | "👳🏽"
  | "👳🏾"
  | "👳🏿"
  | "👳"
  | "👳🏻‍♂️"
  | "👳🏼‍♂️"
  | "👳🏽‍♂️"
  | "👳🏾‍♂️"
  | "👳🏿‍♂️"
  | "👳‍♂️"
  | "👳‍♂"
  | "👳🏻‍♀️"
  | "👳🏼‍♀️"
  | "👳🏽‍♀️"
  | "👳🏾‍♀️"
  | "👳🏿‍♀️"
  | "👳‍♀️"
  | "👳‍♀"
  | "👲🏻"
  | "👲🏼"
  | "👲🏽"
  | "👲🏾"
  | "👲🏿"
  | "👲"
  | "🧕🏻"
  | "🧕🏼"
  | "🧕🏽"
  | "🧕🏾"
  | "🧕🏿"
  | "🧕"
  | "🤵🏻"
  | "🤵🏼"
  | "🤵🏽"
  | "🤵🏾"
  | "🤵🏿"
  | "🤵"
  | "🤵🏻‍♂️"
  | "🤵🏼‍♂️"
  | "🤵🏽‍♂️"
  | "🤵🏾‍♂️"
  | "🤵🏿‍♂️"
  | "🤵‍♂️"
  | "🤵‍♂"
  | "🤵🏻‍♀️"
  | "🤵🏼‍♀️"
  | "🤵🏽‍♀️"
  | "🤵🏾‍♀️"
  | "🤵🏿‍♀️"
  | "🤵‍♀️"
  | "🤵‍♀"
  | "👰🏻"
  | "👰🏼"
  | "👰🏽"
  | "👰🏾"
  | "👰🏿"
  | "👰"
  | "👰🏻‍♂️"
  | "👰🏼‍♂️"
  | "👰🏽‍♂️"
  | "👰🏾‍♂️"
  | "👰🏿‍♂️"
  | "👰‍♂️"
  | "👰‍♂"
  | "👰🏻‍♀️"
  | "👰🏼‍♀️"
  | "👰🏽‍♀️"
  | "👰🏾‍♀️"
  | "👰🏿‍♀️"
  | "👰‍♀️"
  | "👰‍♀"
  | "🤰🏻"
  | "🤰🏼"
  | "🤰🏽"
  | "🤰🏾"
  | "🤰🏿"
  | "🤰"
  | "🤱🏻"
  | "🤱🏼"
  | "🤱🏽"
  | "🤱🏾"
  | "🤱🏿"
  | "🤱"
  | "👩🏻‍🍼"
  | "👩🏼‍🍼"
  | "👩🏽‍🍼"
  | "👩🏾‍🍼"
  | "👩🏿‍🍼"
  | "👩‍🍼"
  | "👨🏻‍🍼"
  | "👨🏼‍🍼"
  | "👨🏽‍🍼"
  | "👨🏾‍🍼"
  | "👨🏿‍🍼"
  | "👨‍🍼"
  | "🧑🏻‍🍼"
  | "🧑🏼‍🍼"
  | "🧑🏽‍🍼"
  | "🧑🏾‍🍼"
  | "🧑🏿‍🍼"
  | "🧑‍🍼"
  | "👼🏻"
  | "👼🏼"
  | "👼🏽"
  | "👼🏾"
  | "👼🏿"
  | "👼"
  | "🎅🏻"
  | "🎅🏼"
  | "🎅🏽"
  | "🎅🏾"
  | "🎅🏿"
  | "🎅"
  | "🤶🏻"
  | "🤶🏼"
  | "🤶🏽"
  | "🤶🏾"
  | "🤶🏿"
  | "🤶"
  | "🧑🏻‍🎄"
  | "🧑🏼‍🎄"
  | "🧑🏽‍🎄"
  | "🧑🏾‍🎄"
  | "🧑🏿‍🎄"
  | "🧑‍🎄"
  | "🦸🏻"
  | "🦸🏼"
  | "🦸🏽"
  | "🦸🏾"
  | "🦸🏿"
  | "🦸"
  | "🦸🏻‍♂️"
  | "🦸🏼‍♂️"
  | "🦸🏽‍♂️"
  | "🦸🏾‍♂️"
  | "🦸🏿‍♂️"
  | "🦸‍♂️"
  | "🦸‍♂"
  | "🦸🏻‍♀️"
  | "🦸🏼‍♀️"
  | "🦸🏽‍♀️"
  | "🦸🏾‍♀️"
  | "🦸🏿‍♀️"
  | "🦸‍♀️"
  | "🦸‍♀"
  | "🦹🏻"
  | "🦹🏼"
  | "🦹🏽"
  | "🦹🏾"
  | "🦹🏿"
  | "🦹"
  | "🦹🏻‍♂️"
  | "🦹🏼‍♂️"
  | "🦹🏽‍♂️"
  | "🦹🏾‍♂️"
  | "🦹🏿‍♂️"
  | "🦹‍♂️"
  | "🦹‍♂"
  | "🦹🏻‍♀️"
  | "🦹🏼‍♀️"
  | "🦹🏽‍♀️"
  | "🦹🏾‍♀️"
  | "🦹🏿‍♀️"
  | "🦹‍♀️"
  | "🦹‍♀"
  | "🧙🏻"
  | "🧙🏼"
  | "🧙🏽"
  | "🧙🏾"
  | "🧙🏿"
  | "🧙"
  | "🧙🏻‍♂️"
  | "🧙🏼‍♂️"
  | "🧙🏽‍♂️"
  | "🧙🏾‍♂️"
  | "🧙🏿‍♂️"
  | "🧙‍♂️"
  | "🧙‍♂"
  | "🧙🏻‍♀️"
  | "🧙🏼‍♀️"
  | "🧙🏽‍♀️"
  | "🧙🏾‍♀️"
  | "🧙🏿‍♀️"
  | "🧙‍♀️"
  | "🧙‍♀"
  | "🧚🏻"
  | "🧚🏼"
  | "🧚🏽"
  | "🧚🏾"
  | "🧚🏿"
  | "🧚"
  | "🧚🏻‍♂️"
  | "🧚🏼‍♂️"
  | "🧚🏽‍♂️"
  | "🧚🏾‍♂️"
  | "🧚🏿‍♂️"
  | "🧚‍♂️"
  | "🧚‍♂"
  | "🧚🏻‍♀️"
  | "🧚🏼‍♀️"
  | "🧚🏽‍♀️"
  | "🧚🏾‍♀️"
  | "🧚🏿‍♀️"
  | "🧚‍♀️"
  | "🧚‍♀"
  | "🧛🏻"
  | "🧛🏼"
  | "🧛🏽"
  | "🧛🏾"
  | "🧛🏿"
  | "🧛"
  | "🧛🏻‍♂️"
  | "🧛🏼‍♂️"
  | "🧛🏽‍♂️"
  | "🧛🏾‍♂️"
  | "🧛🏿‍♂️"
  | "🧛‍♂️"
  | "🧛‍♂"
  | "🧛🏻‍♀️"
  | "🧛🏼‍♀️"
  | "🧛🏽‍♀️"
  | "🧛🏾‍♀️"
  | "🧛🏿‍♀️"
  | "🧛‍♀️"
  | "🧛‍♀"
  | "🧜🏻"
  | "🧜🏼"
  | "🧜🏽"
  | "🧜🏾"
  | "🧜🏿"
  | "🧜"
  | "🧜🏻‍♂️"
  | "🧜🏼‍♂️"
  | "🧜🏽‍♂️"
  | "🧜🏾‍♂️"
  | "🧜🏿‍♂️"
  | "🧜‍♂️"
  | "🧜‍♂"
  | "🧜🏻‍♀️"
  | "🧜🏼‍♀️"
  | "🧜🏽‍♀️"
  | "🧜🏾‍♀️"
  | "🧜🏿‍♀️"
  | "🧜‍♀️"
  | "🧜‍♀"
  | "🧝🏻"
  | "🧝🏼"
  | "🧝🏽"
  | "🧝🏾"
  | "🧝🏿"
  | "🧝"
  | "🧝🏻‍♂️"
  | "🧝🏼‍♂️"
  | "🧝🏽‍♂️"
  | "🧝🏾‍♂️"
  | "🧝🏿‍♂️"
  | "🧝‍♂️"
  | "🧝‍♂"
  | "🧝🏻‍♀️"
  | "🧝🏼‍♀️"
  | "🧝🏽‍♀️"
  | "🧝🏾‍♀️"
  | "🧝🏿‍♀️"
  | "🧝‍♀️"
  | "🧝‍♀"
  | "🧞"
  | "🧞‍♂️"
  | "🧞‍♂"
  | "🧞‍♀️"
  | "🧞‍♀"
  | "🧟"
  | "🧟‍♂️"
  | "🧟‍♂"
  | "🧟‍♀️"
  | "🧟‍♀"
  | "💆🏻"
  | "💆🏼"
  | "💆🏽"
  | "💆🏾"
  | "💆🏿"
  | "💆"
  | "💆🏻‍♂️"
  | "💆🏼‍♂️"
  | "💆🏽‍♂️"
  | "💆🏾‍♂️"
  | "💆🏿‍♂️"
  | "💆‍♂️"
  | "💆‍♂"
  | "💆🏻‍♀️"
  | "💆🏼‍♀️"
  | "💆🏽‍♀️"
  | "💆🏾‍♀️"
  | "💆🏿‍♀️"
  | "💆‍♀️"
  | "💆‍♀"
  | "💇🏻"
  | "💇🏼"
  | "💇🏽"
  | "💇🏾"
  | "💇🏿"
  | "💇"
  | "💇🏻‍♂️"
  | "💇🏼‍♂️"
  | "💇🏽‍♂️"
  | "💇🏾‍♂️"
  | "💇🏿‍♂️"
  | "💇‍♂️"
  | "💇‍♂"
  | "💇🏻‍♀️"
  | "💇🏼‍♀️"
  | "💇🏽‍♀️"
  | "💇🏾‍♀️"
  | "💇🏿‍♀️"
  | "💇‍♀️"
  | "💇‍♀"
  | "🚶🏻"
  | "🚶🏼"
  | "🚶🏽"
  | "🚶🏾"
  | "🚶🏿"
  | "🚶"
  | "🚶🏻‍♂️"
  | "🚶🏼‍♂️"
  | "🚶🏽‍♂️"
  | "🚶🏾‍♂️"
  | "🚶🏿‍♂️"
  | "🚶‍♂️"
  | "🚶‍♂"
  | "🚶🏻‍♀️"
  | "🚶🏼‍♀️"
  | "🚶🏽‍♀️"
  | "🚶🏾‍♀️"
  | "🚶🏿‍♀️"
  | "🚶‍♀️"
  | "🚶‍♀"
  | "🧍🏻"
  | "🧍🏼"
  | "🧍🏽"
  | "🧍🏾"
  | "🧍🏿"
  | "🧍"
  | "🧍🏻‍♂️"
  | "🧍🏼‍♂️"
  | "🧍🏽‍♂️"
  | "🧍🏾‍♂️"
  | "🧍🏿‍♂️"
  | "🧍‍♂️"
  | "🧍‍♂"
  | "🧍🏻‍♀️"
  | "🧍🏼‍♀️"
  | "🧍🏽‍♀️"
  | "🧍🏾‍♀️"
  | "🧍🏿‍♀️"
  | "🧍‍♀️"
  | "🧍‍♀"
  | "🧎🏻"
  | "🧎🏼"
  | "🧎🏽"
  | "🧎🏾"
  | "🧎🏿"
  | "🧎"
  | "🧎🏻‍♂️"
  | "🧎🏼‍♂️"
  | "🧎🏽‍♂️"
  | "🧎🏾‍♂️"
  | "🧎🏿‍♂️"
  | "🧎‍♂️"
  | "🧎‍♂"
  | "🧎🏻‍♀️"
  | "🧎🏼‍♀️"
  | "🧎🏽‍♀️"
  | "🧎🏾‍♀️"
  | "🧎🏿‍♀️"
  | "🧎‍♀️"
  | "🧎‍♀"
  | "🧑🏻‍🦯"
  | "🧑🏼‍🦯"
  | "🧑🏽‍🦯"
  | "🧑🏾‍🦯"
  | "🧑🏿‍🦯"
  | "🧑‍🦯"
  | "👨🏻‍🦯"
  | "👨🏼‍🦯"
  | "👨🏽‍🦯"
  | "👨🏾‍🦯"
  | "👨🏿‍🦯"
  | "👨‍🦯"
  | "👩🏻‍🦯"
  | "👩🏼‍🦯"
  | "👩🏽‍🦯"
  | "👩🏾‍🦯"
  | "👩🏿‍🦯"
  | "👩‍🦯"
  | "🧑🏻‍🦼"
  | "🧑🏼‍🦼"
  | "🧑🏽‍🦼"
  | "🧑🏾‍🦼"
  | "🧑🏿‍🦼"
  | "🧑‍🦼"
  | "👨🏻‍🦼"
  | "👨🏼‍🦼"
  | "👨🏽‍🦼"
  | "👨🏾‍🦼"
  | "👨🏿‍🦼"
  | "👨‍🦼"
  | "👩🏻‍🦼"
  | "👩🏼‍🦼"
  | "👩🏽‍🦼"
  | "👩🏾‍🦼"
  | "👩🏿‍🦼"
  | "👩‍🦼"
  | "🧑🏻‍🦽"
  | "🧑🏼‍🦽"
  | "🧑🏽‍🦽"
  | "🧑🏾‍🦽"
  | "🧑🏿‍🦽"
  | "🧑‍🦽"
  | "👨🏻‍🦽"
  | "👨🏼‍🦽"
  | "👨🏽‍🦽"
  | "👨🏾‍🦽"
  | "👨🏿‍🦽"
  | "👨‍🦽"
  | "👩🏻‍🦽"
  | "👩🏼‍🦽"
  | "👩🏽‍🦽"
  | "👩🏾‍🦽"
  | "👩🏿‍🦽"
  | "👩‍🦽"
  | "🏃🏻"
  | "🏃🏼"
  | "🏃🏽"
  | "🏃🏾"
  | "🏃🏿"
  | "🏃"
  | "🏃🏻‍♂️"
  | "🏃🏼‍♂️"
  | "🏃🏽‍♂️"
  | "🏃🏾‍♂️"
  | "🏃🏿‍♂️"
  | "🏃‍♂️"
  | "🏃‍♂"
  | "🏃🏻‍♀️"
  | "🏃🏼‍♀️"
  | "🏃🏽‍♀️"
  | "🏃🏾‍♀️"
  | "🏃🏿‍♀️"
  | "🏃‍♀️"
  | "🏃‍♀"
  | "💃🏻"
  | "💃🏼"
  | "💃🏽"
  | "💃🏾"
  | "💃🏿"
  | "💃"
  | "🕺🏻"
  | "🕺🏼"
  | "🕺🏽"
  | "🕺🏾"
  | "🕺🏿"
  | "🕺"
  | "🕴🏻"
  | "🕴🏼"
  | "🕴🏽"
  | "🕴🏾"
  | "🕴🏿"
  | "🕴️"
  | "🕴"
  | "👯"
  | "👯‍♂️"
  | "👯‍♂"
  | "👯‍♀️"
  | "👯‍♀"
  | "🧖🏻"
  | "🧖🏼"
  | "🧖🏽"
  | "🧖🏾"
  | "🧖🏿"
  | "🧖"
  | "🧖🏻‍♂️"
  | "🧖🏼‍♂️"
  | "🧖🏽‍♂️"
  | "🧖🏾‍♂️"
  | "🧖🏿‍♂️"
  | "🧖‍♂️"
  | "🧖‍♂"
  | "🧖🏻‍♀️"
  | "🧖🏼‍♀️"
  | "🧖🏽‍♀️"
  | "🧖🏾‍♀️"
  | "🧖🏿‍♀️"
  | "🧖‍♀️"
  | "🧖‍♀"
  | "🧗🏻"
  | "🧗🏼"
  | "🧗🏽"
  | "🧗🏾"
  | "🧗🏿"
  | "🧗"
  | "🧗🏻‍♂️"
  | "🧗🏼‍♂️"
  | "🧗🏽‍♂️"
  | "🧗🏾‍♂️"
  | "🧗🏿‍♂️"
  | "🧗‍♂️"
  | "🧗‍♂"
  | "🧗🏻‍♀️"
  | "🧗🏼‍♀️"
  | "🧗🏽‍♀️"
  | "🧗🏾‍♀️"
  | "🧗🏿‍♀️"
  | "🧗‍♀️"
  | "🧗‍♀"
  | "🤺"
  | "🏇🏻"
  | "🏇🏼"
  | "🏇🏽"
  | "🏇🏾"
  | "🏇🏿"
  | "🏇"
  | "⛷️"
  | "⛷"
  | "🏂🏻"
  | "🏂🏼"
  | "🏂🏽"
  | "🏂🏾"
  | "🏂🏿"
  | "🏂"
  | "🏌🏻"
  | "🏌🏼"
  | "🏌🏽"
  | "🏌🏾"
  | "🏌🏿"
  | "🏌️"
  | "🏌"
  | "🏌🏻‍♂️"
  | "🏌🏼‍♂️"
  | "🏌🏽‍♂️"
  | "🏌🏾‍♂️"
  | "🏌🏿‍♂️"
  | "🏌️‍♂️"
  | "🏌🏻‍♀️"
  | "🏌🏼‍♀️"
  | "🏌🏽‍♀️"
  | "🏌🏾‍♀️"
  | "🏌🏿‍♀️"
  | "🏌️‍♀️"
  | "🏄🏻"
  | "🏄🏼"
  | "🏄🏽"
  | "🏄🏾"
  | "🏄🏿"
  | "🏄"
  | "🏄🏻‍♂️"
  | "🏄🏼‍♂️"
  | "🏄🏽‍♂️"
  | "🏄🏾‍♂️"
  | "🏄🏿‍♂️"
  | "🏄‍♂️"
  | "🏄‍♂"
  | "🏄🏻‍♀️"
  | "🏄🏼‍♀️"
  | "🏄🏽‍♀️"
  | "🏄🏾‍♀️"
  | "🏄🏿‍♀️"
  | "🏄‍♀️"
  | "🏄‍♀"
  | "🚣🏻"
  | "🚣🏼"
  | "🚣🏽"
  | "🚣🏾"
  | "🚣🏿"
  | "🚣"
  | "🚣🏻‍♂️"
  | "🚣🏼‍♂️"
  | "🚣🏽‍♂️"
  | "🚣🏾‍♂️"
  | "🚣🏿‍♂️"
  | "🚣‍♂️"
  | "🚣‍♂"
  | "🚣🏻‍♀️"
  | "🚣🏼‍♀️"
  | "🚣🏽‍♀️"
  | "🚣🏾‍♀️"
  | "🚣🏿‍♀️"
  | "🚣‍♀️"
  | "🚣‍♀"
  | "🏊🏻"
  | "🏊🏼"
  | "🏊🏽"
  | "🏊🏾"
  | "🏊🏿"
  | "🏊"
  | "🏊🏻‍♂️"
  | "🏊🏼‍♂️"
  | "🏊🏽‍♂️"
  | "🏊🏾‍♂️"
  | "🏊🏿‍♂️"
  | "🏊‍♂️"
  | "🏊‍♂"
  | "🏊🏻‍♀️"
  | "🏊🏼‍♀️"
  | "🏊🏽‍♀️"
  | "🏊🏾‍♀️"
  | "🏊🏿‍♀️"
  | "🏊‍♀️"
  | "🏊‍♀"
  | "⛹🏻"
  | "⛹🏼"
  | "⛹🏽"
  | "⛹🏾"
  | "⛹🏿"
  | "⛹️"
  | "⛹"
  | "⛹🏻‍♂️"
  | "⛹🏼‍♂️"
  | "⛹🏽‍♂️"
  | "⛹🏾‍♂️"
  | "⛹🏿‍♂️"
  | "⛹️‍♂️"
  | "⛹🏻‍♀️"
  | "⛹🏼‍♀️"
  | "⛹🏽‍♀️"
  | "⛹🏾‍♀️"
  | "⛹🏿‍♀️"
  | "⛹️‍♀️"
  | "🏋🏻"
  | "🏋🏼"
  | "🏋🏽"
  | "🏋🏾"
  | "🏋🏿"
  | "🏋️"
  | "🏋"
  | "🏋🏻‍♂️"
  | "🏋🏼‍♂️"
  | "🏋🏽‍♂️"
  | "🏋🏾‍♂️"
  | "🏋🏿‍♂️"
  | "🏋️‍♂️"
  | "🏋🏻‍♀️"
  | "🏋🏼‍♀️"
  | "🏋🏽‍♀️"
  | "🏋🏾‍♀️"
  | "🏋🏿‍♀️"
  | "🏋️‍♀️"
  | "🚴🏻"
  | "🚴🏼"
  | "🚴🏽"
  | "🚴🏾"
  | "🚴🏿"
  | "🚴"
  | "🚴🏻‍♂️"
  | "🚴🏼‍♂️"
  | "🚴🏽‍♂️"
  | "🚴🏾‍♂️"
  | "🚴🏿‍♂️"
  | "🚴‍♂️"
  | "🚴‍♂"
  | "🚴🏻‍♀️"
  | "🚴🏼‍♀️"
  | "🚴🏽‍♀️"
  | "🚴🏾‍♀️"
  | "🚴🏿‍♀️"
  | "🚴‍♀️"
  | "🚴‍♀"
  | "🚵🏻"
  | "🚵🏼"
  | "🚵🏽"
  | "🚵🏾"
  | "🚵🏿"
  | "🚵"
  | "🚵🏻‍♂️"
  | "🚵🏼‍♂️"
  | "🚵🏽‍♂️"
  | "🚵🏾‍♂️"
  | "🚵🏿‍♂️"
  | "🚵‍♂️"
  | "🚵‍♂"
  | "🚵🏻‍♀️"
  | "🚵🏼‍♀️"
  | "🚵🏽‍♀️"
  | "🚵🏾‍♀️"
  | "🚵🏿‍♀️"
  | "🚵‍♀️"
  | "🚵‍♀"
  | "🤸🏻"
  | "🤸🏼"
  | "🤸🏽"
  | "🤸🏾"
  | "🤸🏿"
  | "🤸"
  | "🤸🏻‍♂️"
  | "🤸🏼‍♂️"
  | "🤸🏽‍♂️"
  | "🤸🏾‍♂️"
  | "🤸🏿‍♂️"
  | "🤸‍♂️"
  | "🤸‍♂"
  | "🤸🏻‍♀️"
  | "🤸🏼‍♀️"
  | "🤸🏽‍♀️"
  | "🤸🏾‍♀️"
  | "🤸🏿‍♀️"
  | "🤸‍♀️"
  | "🤸‍♀"
  | "🤼"
  | "🤼‍♂️"
  | "🤼‍♂"
  | "🤼‍♀️"
  | "🤼‍♀"
  | "🤽🏻"
  | "🤽🏼"
  | "🤽🏽"
  | "🤽🏾"
  | "🤽🏿"
  | "🤽"
  | "🤽🏻‍♂️"
  | "🤽🏼‍♂️"
  | "🤽🏽‍♂️"
  | "🤽🏾‍♂️"
  | "🤽🏿‍♂️"
  | "🤽‍♂️"
  | "🤽‍♂"
  | "🤽🏻‍♀️"
  | "🤽🏼‍♀️"
  | "🤽🏽‍♀️"
  | "🤽🏾‍♀️"
  | "🤽🏿‍♀️"
  | "🤽‍♀️"
  | "🤽‍♀"
  | "🤾🏻"
  | "🤾🏼"
  | "🤾🏽"
  | "🤾🏾"
  | "🤾🏿"
  | "🤾"
  | "🤾🏻‍♂️"
  | "🤾🏼‍♂️"
  | "🤾🏽‍♂️"
  | "🤾🏾‍♂️"
  | "🤾🏿‍♂️"
  | "🤾‍♂️"
  | "🤾‍♂"
  | "🤾🏻‍♀️"
  | "🤾🏼‍♀️"
  | "🤾🏽‍♀️"
  | "🤾🏾‍♀️"
  | "🤾🏿‍♀️"
  | "🤾‍♀️"
  | "🤾‍♀"
  | "🤹🏻"
  | "🤹🏼"
  | "🤹🏽"
  | "🤹🏾"
  | "🤹🏿"
  | "🤹"
  | "🤹🏻‍♂️"
  | "🤹🏼‍♂️"
  | "🤹🏽‍♂️"
  | "🤹🏾‍♂️"
  | "🤹🏿‍♂️"
  | "🤹‍♂️"
  | "🤹‍♂"
  | "🤹🏻‍♀️"
  | "🤹🏼‍♀️"
  | "🤹🏽‍♀️"
  | "🤹🏾‍♀️"
  | "🤹🏿‍♀️"
  | "🤹‍♀️"
  | "🤹‍♀"
  | "🧘🏻"
  | "🧘🏼"
  | "🧘🏽"
  | "🧘🏾"
  | "🧘🏿"
  | "🧘"
  | "🧘🏻‍♂️"
  | "🧘🏼‍♂️"
  | "🧘🏽‍♂️"
  | "🧘🏾‍♂️"
  | "🧘🏿‍♂️"
  | "🧘‍♂️"
  | "🧘‍♂"
  | "🧘🏻‍♀️"
  | "🧘🏼‍♀️"
  | "🧘🏽‍♀️"
  | "🧘🏾‍♀️"
  | "🧘🏿‍♀️"
  | "🧘‍♀️"
  | "🧘‍♀"
  | "🛀🏻"
  | "🛀🏼"
  | "🛀🏽"
  | "🛀🏾"
  | "🛀🏿"
  | "🛀"
  | "🛌🏻"
  | "🛌🏼"
  | "🛌🏽"
  | "🛌🏾"
  | "🛌🏿"
  | "🛌"
  | "🧑🏻‍🤝‍🧑🏻"
  | "🧑🏻‍🤝‍🧑🏼"
  | "🧑🏻‍🤝‍🧑🏽"
  | "🧑🏻‍🤝‍🧑🏾"
  | "🧑🏻‍🤝‍🧑🏿"
  | "🧑🏼‍🤝‍🧑🏻"
  | "🧑🏼‍🤝‍🧑🏼"
  | "🧑🏼‍🤝‍🧑🏽"
  | "🧑🏼‍🤝‍🧑🏾"
  | "🧑🏼‍🤝‍🧑🏿"
  | "🧑🏽‍🤝‍🧑🏻"
  | "🧑🏽‍🤝‍🧑🏼"
  | "🧑🏽‍🤝‍🧑🏽"
  | "🧑🏽‍🤝‍🧑🏾"
  | "🧑🏽‍🤝‍🧑🏿"
  | "🧑🏾‍🤝‍🧑🏻"
  | "🧑🏾‍🤝‍🧑🏼"
  | "🧑🏾‍🤝‍🧑🏽"
  | "🧑🏾‍🤝‍🧑🏾"
  | "🧑🏾‍🤝‍🧑🏿"
  | "🧑🏿‍🤝‍🧑🏻"
  | "🧑🏿‍🤝‍🧑🏼"
  | "🧑🏿‍🤝‍🧑🏽"
  | "🧑🏿‍🤝‍🧑🏾"
  | "🧑🏿‍🤝‍🧑🏿"
  | "🧑‍🤝‍🧑"
  | "👭"
  | "👫"
  | "👬"
  | "💏"
  | "💑"
  | "👪"
  | "👨‍👩‍👦"
  | "👨‍👩‍👧"
  | "👨‍👩‍👧‍👦"
  | "👨‍👩‍👦‍👦"
  | "👨‍👩‍👧‍👧"
  | "👨‍👨‍👦"
  | "👨‍👨‍👧"
  | "👨‍👨‍👧‍👦"
  | "👨‍👨‍👦‍👦"
  | "👨‍👨‍👧‍👧"
  | "👩‍👩‍👦"
  | "👩‍👩‍👧"
  | "👩‍👩‍👧‍👦"
  | "👩‍👩‍👦‍👦"
  | "👩‍👩‍👧‍👧"
  | "👨‍👦"
  | "👨‍👦‍👦"
  | "👨‍👧"
  | "👨‍👧‍👦"
  | "👨‍👧‍👧"
  | "👩‍👦"
  | "👩‍👦‍👦"
  | "👩‍👧"
  | "👩‍👧‍👦"
  | "👩‍👧‍👧"
  | "🗣️"
  | "🗣"
  | "👤"
  | "👥"
  | "🫂"
  | "👣"
  | "🐵"
  | "🐒"
  | "🦍"
  | "🦧"
  | "🐶"
  | "🐕"
  | "🦮"
  | "🐕‍🦺"
  | "🐩"
  | "🐺"
  | "🦊"
  | "🦝"
  | "🐱"
  | "🐈"
  | "🐈‍⬛"
  | "🦁"
  | "🐯"
  | "🐅"
  | "🐆"
  | "🐴"
  | "🐎"
  | "🦄"
  | "🦓"
  | "🦌"
  | "🦬"
  | "🐮"
  | "🐂"
  | "🐃"
  | "🐄"
  | "🐷"
  | "🐖"
  | "🐗"
  | "🐽"
  | "🐏"
  | "🐑"
  | "🐐"
  | "🐪"
  | "🐫"
  | "🦙"
  | "🦒"
  | "🐘"
  | "🦣"
  | "🦏"
  | "🦛"
  | "🐭"
  | "🐁"
  | "🐀"
  | "🐹"
  | "🐰"
  | "🐇"
  | "🐿️"
  | "🐿"
  | "🦫"
  | "🦔"
  | "🦇"
  | "🐻"
  | "🐻‍❄️"
  | "🐻‍❄"
  | "🐨"
  | "🐼"
  | "🦥"
  | "🦦"
  | "🦨"
  | "🦘"
  | "🦡"
  | "🐾"
  | "🦃"
  | "🐔"
  | "🐓"
  | "🐣"
  | "🐤"
  | "🐥"
  | "🐦"
  | "🐧"
  | "🕊️"
  | "🕊"
  | "🦅"
  | "🦆"
  | "🦢"
  | "🦉"
  | "🦤"
  | "🪶"
  | "🦩"
  | "🦚"
  | "🦜"
  | "🐸"
  | "🐊"
  | "🐢"
  | "🦎"
  | "🐍"
  | "🐲"
  | "🐉"
  | "🦕"
  | "🦖"
  | "🐳"
  | "🐋"
  | "🐬"
  | "🦭"
  | "🐟"
  | "🐠"
  | "🐡"
  | "🦈"
  | "🐙"
  | "🐚"
  | "🐌"
  | "🦋"
  | "🐛"
  | "🐜"
  | "🐝"
  | "🪲"
  | "🐞"
  | "🦗"
  | "🪳"
  | "🕷️"
  | "🕷"
  | "🕸️"
  | "🕸"
  | "🦂"
  | "🦟"
  | "🪰"
  | "🪱"
  | "🦠"
  | "💐"
  | "🌸"
  | "💮"
  | "🏵️"
  | "🏵"
  | "🌹"
  | "🥀"
  | "🌺"
  | "🌻"
  | "🌼"
  | "🌷"
  | "🌱"
  | "🪴"
  | "🌲"
  | "🌳"
  | "🌴"
  | "🌵"
  | "🌾"
  | "🌿"
  | "☘️"
  | "☘"
  | "🍀"
  | "🍁"
  | "🍂"
  | "🍃"
  | "🍇"
  | "🍈"
  | "🍉"
  | "🍊"
  | "🍋"
  | "🍌"
  | "🍍"
  | "🥭"
  | "🍎"
  | "🍏"
  | "🍐"
  | "🍑"
  | "🍒"
  | "🍓"
  | "🫐"
  | "🥝"
  | "🍅"
  | "🫒"
  | "🥥"
  | "🥑"
  | "🍆"
  | "🥔"
  | "🥕"
  | "🌽"
  | "🌶️"
  | "🌶"
  | "🫑"
  | "🥒"
  | "🥬"
  | "🥦"
  | "🧄"
  | "🧅"
  | "🍄"
  | "🥜"
  | "🌰"
  | "🍞"
  | "🥐"
  | "🥖"
  | "🫓"
  | "🥨"
  | "🥯"
  | "🥞"
  | "🧇"
  | "🧀"
  | "🍖"
  | "🍗"
  | "🥩"
  | "🥓"
  | "🍔"
  | "🍟"
  | "🍕"
  | "🌭"
  | "🥪"
  | "🌮"
  | "🌯"
  | "🫔"
  | "🥙"
  | "🧆"
  | "🥚"
  | "🍳"
  | "🥘"
  | "🍲"
  | "🫕"
  | "🥣"
  | "🥗"
  | "🍿"
  | "🧈"
  | "🧂"
  | "🥫"
  | "🍱"
  | "🍘"
  | "🍙"
  | "🍚"
  | "🍛"
  | "🍜"
  | "🍝"
  | "🍠"
  | "🍢"
  | "🍣"
  | "🍤"
  | "🍥"
  | "🥮"
  | "🍡"
  | "🥟"
  | "🥠"
  | "🥡"
  | "🦀"
  | "🦞"
  | "🦐"
  | "🦑"
  | "🦪"
  | "🍦"
  | "🍧"
  | "🍨"
  | "🍩"
  | "🍪"
  | "🎂"
  | "🍰"
  | "🧁"
  | "🥧"
  | "🍫"
  | "🍬"
  | "🍭"
  | "🍮"
  | "🍯"
  | "🍼"
  | "🥛"
  | "☕"
  | "🫖"
  | "🍵"
  | "🍶"
  | "🍾"
  | "🍷"
  | "🍸"
  | "🍹"
  | "🍺"
  | "🍻"
  | "🥂"
  | "🥃"
  | "🥤"
  | "🧋"
  | "🧃"
  | "🧉"
  | "🧊"
  | "🥢"
  | "🍽️"
  | "🍽"
  | "🍴"
  | "🥄"
  | "🔪"
  | "🏺"
  | "🌍"
  | "🌎"
  | "🌏"
  | "🌐"
  | "🗺️"
  | "🗺"
  | "🗾"
  | "🧭"
  | "🏔️"
  | "🏔"
  | "⛰️"
  | "⛰"
  | "🌋"
  | "🗻"
  | "🏕️"
  | "🏕"
  | "🏖️"
  | "🏖"
  | "🏜️"
  | "🏜"
  | "🏝️"
  | "🏝"
  | "🏞️"
  | "🏞"
  | "🏟️"
  | "🏟"
  | "🏛️"
  | "🏛"
  | "🏗️"
  | "🏗"
  | "🧱"
  | "🪨"
  | "🪵"
  | "🛖"
  | "🏘️"
  | "🏘"
  | "🏚️"
  | "🏚"
  | "🏠"
  | "🏡"
  | "🏢"
  | "🏣"
  | "🏤"
  | "🏥"
  | "🏦"
  | "🏨"
  | "🏩"
  | "🏪"
  | "🏫"
  | "🏬"
  | "🏭"
  | "🏯"
  | "🏰"
  | "💒"
  | "🗼"
  | "🗽"
  | "⛪"
  | "🕌"
  | "🛕"
  | "🕍"
  | "⛩️"
  | "⛩"
  | "🕋"
  | "⛲"
  | "⛺"
  | "🌁"
  | "🌃"
  | "🏙️"
  | "🏙"
  | "🌄"
  | "🌅"
  | "🌆"
  | "🌇"
  | "🌉"
  | "♨️"
  | "♨"
  | "🎠"
  | "🎡"
  | "🎢"
  | "💈"
  | "🎪"
  | "🚂"
  | "🚃"
  | "🚄"
  | "🚅"
  | "🚆"
  | "🚇"
  | "🚈"
  | "🚉"
  | "🚊"
  | "🚝"
  | "🚞"
  | "🚋"
  | "🚌"
  | "🚍"
  | "🚎"
  | "🚐"
  | "🚑"
  | "🚒"
  | "🚓"
  | "🚔"
  | "🚕"
  | "🚖"
  | "🚗"
  | "🚘"
  | "🚙"
  | "🛻"
  | "🚚"
  | "🚛"
  | "🚜"
  | "🏎️"
  | "🏎"
  | "🏍️"
  | "🏍"
  | "🛵"
  | "🦽"
  | "🦼"
  | "🛺"
  | "🚲"
  | "🛴"
  | "🛹"
  | "🛼"
  | "🚏"
  | "🛣️"
  | "🛣"
  | "🛤️"
  | "🛤"
  | "🛢️"
  | "🛢"
  | "⛽"
  | "🚨"
  | "🚥"
  | "🚦"
  | "🛑"
  | "🚧"
  | "⚓"
  | "⛵"
  | "🛶"
  | "🚤"
  | "🛳️"
  | "🛳"
  | "⛴️"
  | "⛴"
  | "🛥️"
  | "🛥"
  | "🚢"
  | "✈️"
  | "✈"
  | "🛩️"
  | "🛩"
  | "🛫"
  | "🛬"
  | "🪂"
  | "💺"
  | "🚁"
  | "🚟"
  | "🚠"
  | "🚡"
  | "🛰️"
  | "🛰"
  | "🚀"
  | "🛸"
  | "🛎️"
  | "🛎"
  | "🧳"
  | "⌛"
  | "⏳"
  | "⌚"
  | "⏰"
  | "⏱️"
  | "⏱"
  | "⏲️"
  | "⏲"
  | "🕰️"
  | "🕰"
  | "🕛"
  | "🕧"
  | "🕐"
  | "🕜"
  | "🕑"
  | "🕝"
  | "🕒"
  | "🕞"
  | "🕓"
  | "🕟"
  | "🕔"
  | "🕠"
  | "🕕"
  | "🕡"
  | "🕖"
  | "🕢"
  | "🕗"
  | "🕣"
  | "🕘"
  | "🕤"
  | "🕙"
  | "🕥"
  | "🕚"
  | "🕦"
  | "🌑"
  | "🌒"
  | "🌓"
  | "🌔"
  | "🌕"
  | "🌖"
  | "🌗"
  | "🌘"
  | "🌙"
  | "🌚"
  | "🌛"
  | "🌜"
  | "🌡️"
  | "🌡"
  | "☀️"
  | "☀"
  | "🌝"
  | "🌞"
  | "🪐"
  | "⭐"
  | "🌟"
  | "🌠"
  | "🌌"
  | "☁️"
  | "☁"
  | "⛅"
  | "⛈️"
  | "⛈"
  | "🌤️"
  | "🌤"
  | "🌥️"
  | "🌥"
  | "🌦️"
  | "🌦"
  | "🌧️"
  | "🌧"
  | "🌨️"
  | "🌨"
  | "🌩️"
  | "🌩"
  | "🌪️"
  | "🌪"
  | "🌫️"
  | "🌫"
  | "🌬️"
  | "🌬"
  | "🌀"
  | "🌈"
  | "🌂"
  | "☂️"
  | "☂"
  | "☔"
  | "⛱️"
  | "⛱"
  | "⚡"
  | "❄️"
  | "❄"
  | "☃️"
  | "☃"
  | "⛄"
  | "☄️"
  | "☄"
  | "🔥"
  | "💧"
  | "🌊"
  | "🎃"
  | "🎄"
  | "🎆"
  | "🎇"
  | "🧨"
  | "✨"
  | "🎈"
  | "🎉"
  | "🎊"
  | "🎋"
  | "🎍"
  | "🎎"
  | "🎏"
  | "🎐"
  | "🎑"
  | "🧧"
  | "🎀"
  | "🎁"
  | "🎗️"
  | "🎗"
  | "🎟️"
  | "🎟"
  | "🎫"
  | "🎖️"
  | "🎖"
  | "🏆"
  | "🏅"
  | "🥇"
  | "🥈"
  | "🥉"
  | "⚽"
  | "⚾"
  | "🥎"
  | "🏀"
  | "🏐"
  | "🏈"
  | "🏉"
  | "🎾"
  | "🥏"
  | "🎳"
  | "🏏"
  | "🏑"
  | "🏒"
  | "🥍"
  | "🏓"
  | "🏸"
  | "🥊"
  | "🥋"
  | "🥅"
  | "⛳"
  | "⛸️"
  | "⛸"
  | "🎣"
  | "🤿"
  | "🎽"
  | "🎿"
  | "🛷"
  | "🥌"
  | "🎯"
  | "🪀"
  | "🪁"
  | "🎱"
  | "🔮"
  | "🪄"
  | "🧿"
  | "🎮"
  | "🕹️"
  | "🕹"
  | "🎰"
  | "🎲"
  | "🧩"
  | "🧸"
  | "🪅"
  | "🪆"
  | "♠️"
  | "♠"
  | "♥️"
  | "♥"
  | "♦️"
  | "♦"
  | "♣️"
  | "♣"
  | "♟️"
  | "♟"
  | "🃏"
  | "🀄"
  | "🎴"
  | "🎭"
  | "🖼️"
  | "🖼"
  | "🎨"
  | "🧵"
  | "🪡"
  | "🧶"
  | "🪢"
  | "👓"
  | "🕶️"
  | "🕶"
  | "🥽"
  | "🥼"
  | "🦺"
  | "👔"
  | "👕"
  | "👖"
  | "🧣"
  | "🧤"
  | "🧥"
  | "🧦"
  | "👗"
  | "👘"
  | "🥻"
  | "🩱"
  | "🩲"
  | "🩳"
  | "👙"
  | "👚"
  | "👛"
  | "👜"
  | "👝"
  | "🛍️"
  | "🛍"
  | "🎒"
  | "🩴"
  | "👞"
  | "👟"
  | "🥾"
  | "🥿"
  | "👠"
  | "👡"
  | "🩰"
  | "👢"
  | "👑"
  | "👒"
  | "🎩"
  | "🎓"
  | "🧢"
  | "🪖"
  | "⛑️"
  | "⛑"
  | "📿"
  | "💄"
  | "💍"
  | "💎"
  | "🔇"
  | "🔈"
  | "🔉"
  | "🔊"
  | "📢"
  | "📣"
  | "📯"
  | "🔔"
  | "🔕"
  | "🎼"
  | "🎵"
  | "🎶"
  | "🎙️"
  | "🎙"
  | "🎚️"
  | "🎚"
  | "🎛️"
  | "🎛"
  | "🎤"
  | "🎧"
  | "📻"
  | "🎷"
  | "🪗"
  | "🎸"
  | "🎹"
  | "🎺"
  | "🎻"
  | "🪕"
  | "🥁"
  | "🪘"
  | "📱"
  | "📲"
  | "☎️"
  | "☎"
  | "📞"
  | "📟"
  | "📠"
  | "🔋"
  | "🔌"
  | "💻"
  | "🖥️"
  | "🖥"
  | "🖨️"
  | "🖨"
  | "⌨️"
  | "⌨"
  | "🖱️"
  | "🖱"
  | "🖲️"
  | "🖲"
  | "💽"
  | "💾"
  | "💿"
  | "📀"
  | "🧮"
  | "🎥"
  | "🎞️"
  | "🎞"
  | "📽️"
  | "📽"
  | "🎬"
  | "📺"
  | "📷"
  | "📸"
  | "📹"
  | "📼"
  | "🔍"
  | "🔎"
  | "🕯️"
  | "🕯"
  | "💡"
  | "🔦"
  | "🏮"
  | "🪔"
  | "📔"
  | "📕"
  | "📖"
  | "📗"
  | "📘"
  | "📙"
  | "📚"
  | "📓"
  | "📒"
  | "📃"
  | "📜"
  | "📄"
  | "📰"
  | "🗞️"
  | "🗞"
  | "📑"
  | "🔖"
  | "🏷️"
  | "🏷"
  | "💰"
  | "🪙"
  | "💴"
  | "💵"
  | "💶"
  | "💷"
  | "💸"
  | "💳"
  | "🧾"
  | "💹"
  | "✉️"
  | "✉"
  | "📧"
  | "📨"
  | "📩"
  | "📤"
  | "📥"
  | "📦"
  | "📫"
  | "📪"
  | "📬"
  | "📭"
  | "📮"
  | "🗳️"
  | "🗳"
  | "✏️"
  | "✏"
  | "✒️"
  | "✒"
  | "🖋️"
  | "🖋"
  | "🖊️"
  | "🖊"
  | "🖌️"
  | "🖌"
  | "🖍️"
  | "🖍"
  | "📝"
  | "💼"
  | "📁"
  | "📂"
  | "🗂️"
  | "🗂"
  | "📅"
  | "📆"
  | "🗒️"
  | "🗒"
  | "🗓️"
  | "🗓"
  | "📇"
  | "📈"
  | "📉"
  | "📊"
  | "📋"
  | "📌"
  | "📍"
  | "📎"
  | "🖇️"
  | "🖇"
  | "📏"
  | "📐"
  | "✂️"
  | "✂"
  | "🗃️"
  | "🗃"
  | "🗄️"
  | "🗄"
  | "🗑️"
  | "🗑"
  | "🔒"
  | "🔓"
  | "🔏"
  | "🔐"
  | "🔑"
  | "🗝️"
  | "🗝"
  | "🔨"
  | "🪓"
  | "⛏️"
  | "⛏"
  | "⚒️"
  | "⚒"
  | "🛠️"
  | "🛠"
  | "🗡️"
  | "🗡"
  | "⚔️"
  | "⚔"
  | "🔫"
  | "🪃"
  | "🏹"
  | "🛡️"
  | "🛡"
  | "🪚"
  | "🔧"
  | "🪛"
  | "🔩"
  | "⚙️"
  | "⚙"
  | "🗜️"
  | "🗜"
  | "⚖️"
  | "⚖"
  | "🦯"
  | "🔗"
  | "⛓️"
  | "⛓"
  | "🪝"
  | "🧰"
  | "🧲"
  | "🪜"
  | "⚗️"
  | "⚗"
  | "🧪"
  | "🧫"
  | "🧬"
  | "🔬"
  | "🔭"
  | "📡"
  | "💉"
  | "🩸"
  | "💊"
  | "🩹"
  | "🩺"
  | "🚪"
  | "🛗"
  | "🪞"
  | "🪟"
  | "🛏️"
  | "🛏"
  | "🛋️"
  | "🛋"
  | "🪑"
  | "🚽"
  | "🪠"
  | "🚿"
  | "🛁"
  | "🪤"
  | "🪒"
  | "🧴"
  | "🧷"
  | "🧹"
  | "🧺"
  | "🧻"
  | "🪣"
  | "🧼"
  | "🪥"
  | "🧽"
  | "🧯"
  | "🛒"
  | "🚬"
  | "⚰️"
  | "⚰"
  | "🪦"
  | "⚱️"
  | "⚱"
  | "🗿"
  | "🪧"
  | "🏧"
  | "🚮"
  | "🚰"
  | "♿"
  | "🚹"
  | "🚺"
  | "🚻"
  | "🚼"
  | "🚾"
  | "🛂"
  | "🛃"
  | "🛄"
  | "🛅"
  | "⚠️"
  | "⚠"
  | "🚸"
  | "⛔"
  | "🚫"
  | "🚳"
  | "🚭"
  | "🚯"
  | "🚱"
  | "🚷"
  | "📵"
  | "🔞"
  | "☢️"
  | "☢"
  | "☣️"
  | "☣"
  | "⬆️"
  | "⬆"
  | "↗️"
  | "↗"
  | "➡️"
  | "➡"
  | "↘️"
  | "↘"
  | "⬇️"
  | "⬇"
  | "↙️"
  | "↙"
  | "⬅️"
  | "⬅"
  | "↖️"
  | "↖"
  | "↕️"
  | "↕"
  | "↔️"
  | "↔"
  | "↩️"
  | "↩"
  | "↪️"
  | "↪"
  | "⤴️"
  | "⤴"
  | "⤵️"
  | "⤵"
  | "🔃"
  | "🔄"
  | "🔙"
  | "🔚"
  | "🔛"
  | "🔜"
  | "🔝"
  | "🛐"
  | "⚛️"
  | "⚛"
  | "🕉️"
  | "🕉"
  | "✡️"
  | "✡"
  | "☸️"
  | "☸"
  | "☯️"
  | "☯"
  | "✝️"
  | "✝"
  | "☦️"
  | "☦"
  | "☪️"
  | "☪"
  | "☮️"
  | "☮"
  | "🕎"
  | "🔯"
  | "♈"
  | "♉"
  | "♊"
  | "♋"
  | "♌"
  | "♍"
  | "♎"
  | "♏"
  | "♐"
  | "♑"
  | "♒"
  | "♓"
  | "⛎"
  | "🔀"
  | "🔁"
  | "🔂"
  | "▶️"
  | "▶"
  | "⏩"
  | "⏭️"
  | "⏭"
  | "⏯️"
  | "⏯"
  | "◀️"
  | "◀"
  | "⏪"
  | "⏮️"
  | "⏮"
  | "🔼"
  | "⏫"
  | "🔽"
  | "⏬"
  | "⏸️"
  | "⏸"
  | "⏹️"
  | "⏹"
  | "⏺️"
  | "⏺"
  | "⏏️"
  | "⏏"
  | "🎦"
  | "🔅"
  | "🔆"
  | "📶"
  | "📳"
  | "📴"
  | "♀️"
  | "♀"
  | "♂️"
  | "♂"
  | "⚧️"
  | "⚧"
  | "✖️"
  | "✖"
  | "➕"
  | "➖"
  | "➗"
  | "♾️"
  | "♾"
  | "‼️"
  | "‼"
  | "⁉️"
  | "⁉"
  | "❓"
  | "❔"
  | "❕"
  | "❗"
  | "〰️"
  | "〰"
  | "💱"
  | "💲"
  | "⚕️"
  | "⚕"
  | "♻️"
  | "♻"
  | "⚜️"
  | "⚜"
  | "🔱"
  | "📛"
  | "🔰"
  | "⭕"
  | "✅"
  | "☑️"
  | "☑"
  | "✔️"
  | "✔"
  | "❌"
  | "❎"
  | "➰"
  | "➿"
  | "〽️"
  | "〽"
  | "✳️"
  | "✳"
  | "✴️"
  | "✴"
  | "❇️"
  | "❇"
  | "©️"
  | "©"
  | "®️"
  | "®"
  | "™️"
  | "™"
  | "#️⃣"
  | "#⃣"
  | "*️⃣"
  | "*⃣"
  | "0️⃣"
  | "0⃣"
  | "1️⃣"
  | "1⃣"
  | "2️⃣"
  | "2⃣"
  | "3️⃣"
  | "3⃣"
  | "4️⃣"
  | "4⃣"
  | "5️⃣"
  | "5⃣"
  | "6️⃣"
  | "6⃣"
  | "7️⃣"
  | "7⃣"
  | "8️⃣"
  | "8⃣"
  | "9️⃣"
  | "9⃣"
  | "🔟"
  | "🔠"
  | "🔡"
  | "🔢"
  | "🔣"
  | "🔤"
  | "🅰️"
  | "🅰"
  | "🆎"
  | "🅱️"
  | "🅱"
  | "🆑"
  | "🆒"
  | "🆓"
  | "ℹ️"
  | "ℹ"
  | "🆔"
  | "Ⓜ️"
  | "Ⓜ"
  | "🆕"
  | "🆖"
  | "🅾️"
  | "🅾"
  | "🆗"
  | "🅿️"
  | "🅿"
  | "🆘"
  | "🆙"
  | "🆚"
  | "🈁"
  | "🈂️"
  | "🈂"
  | "🈷️"
  | "🈷"
  | "🈶"
  | "🈯"
  | "🉐"
  | "🈹"
  | "🈚"
  | "🈲"
  | "🉑"
  | "🈸"
  | "🈴"
  | "🈳"
  | "㊗️"
  | "㊗"
  | "㊙️"
  | "㊙"
  | "🈺"
  | "🈵"
  | "🔴"
  | "🟠"
  | "🟡"
  | "🟢"
  | "🔵"
  | "🟣"
  | "🟤"
  | "⚫"
  | "⚪"
  | "🟥"
  | "🟧"
  | "🟨"
  | "🟩"
  | "🟦"
  | "🟪"
  | "🟫"
  | "⬛"
  | "⬜"
  | "◼️"
  | "◼"
  | "◻️"
  | "◻"
  | "◾"
  | "◽"
  | "▪️"
  | "▪"
  | "▫️"
  | "▫"
  | "🔶"
  | "🔷"
  | "🔸"
  | "🔹"
  | "🔺"
  | "🔻"
  | "💠"
  | "🔘"
  | "🔳"
  | "🔲"
  | "🏁"
  | "🚩"
  | "🎌"
  | "🏴"
  | "🏳️"
  | "🏳"
  | "🏳️‍🌈"
  | "🏳‍🌈"
  | "🏳️‍⚧️"
  | "🏴‍☠️"
  | "🏴‍☠"
  | "🇦🇨"
  | "🇦🇩"
  | "🇦🇪"
  | "🇦🇫"
  | "🇦🇬"
  | "🇦🇮"
  | "🇦🇱"
  | "🇦🇲"
  | "🇦🇴"
  | "🇦🇶"
  | "🇦🇷"
  | "🇦🇸"
  | "🇦🇹"
  | "🇦🇺"
  | "🇦🇼"
  | "🇦🇽"
  | "🇦🇿"
  | "🇧🇦"
  | "🇧🇧"
  | "🇧🇩"
  | "🇧🇪"
  | "🇧🇫"
  | "🇧🇬"
  | "🇧🇭"
  | "🇧🇮"
  | "🇧🇯"
  | "🇧🇱"
  | "🇧🇲"
  | "🇧🇳"
  | "🇧🇴"
  | "🇧🇶"
  | "🇧🇷"
  | "🇧🇸"
  | "🇧🇹"
  | "🇧🇻"
  | "🇧🇼"
  | "🇧🇾"
  | "🇧🇿"
  | "🇨🇦"
  | "🇨🇨"
  | "🇨🇩"
  | "🇨🇫"
  | "🇨🇬"
  | "🇨🇭"
  | "🇨🇮"
  | "🇨🇰"
  | "🇨🇱"
  | "🇨🇲"
  | "🇨🇳"
  | "🇨🇴"
  | "🇨🇵"
  | "🇨🇷"
  | "🇨🇺"
  | "🇨🇻"
  | "🇨🇼"
  | "🇨🇽"
  | "🇨🇾"
  | "🇨🇿"
  | "🇩🇪"
  | "🇩🇬"
  | "🇩🇯"
  | "🇩🇰"
  | "🇩🇲"
  | "🇩🇴"
  | "🇩🇿"
  | "🇪🇦"
  | "🇪🇨"
  | "🇪🇪"
  | "🇪🇬"
  | "🇪🇭"
  | "🇪🇷"
  | "🇪🇸"
  | "🇪🇹"
  | "🇪🇺"
  | "🇫🇮"
  | "🇫🇯"
  | "🇫🇰"
  | "🇫🇲"
  | "🇫🇴"
  | "🇫🇷"
  | "🇬🇦"
  | "🇬🇧"
  | "🇬🇩"
  | "🇬🇪"
  | "🇬🇫"
  | "🇬🇬"
  | "🇬🇭"
  | "🇬🇮"
  | "🇬🇱"
  | "🇬🇲"
  | "🇬🇳"
  | "🇬🇵"
  | "🇬🇶"
  | "🇬🇷"
  | "🇬🇸"
  | "🇬🇹"
  | "🇬🇺"
  | "🇬🇼"
  | "🇬🇾"
  | "🇭🇰"
  | "🇭🇲"
  | "🇭🇳"
  | "🇭🇷"
  | "🇭🇹"
  | "🇭🇺"
  | "🇮🇨"
  | "🇮🇩"
  | "🇮🇪"
  | "🇮🇱"
  | "🇮🇲"
  | "🇮🇳"
  | "🇮🇴"
  | "🇮🇶"
  | "🇮🇷"
  | "🇮🇸"
  | "🇮🇹"
  | "🇯🇪"
  | "🇯🇲"
  | "🇯🇴"
  | "🇯🇵"
  | "🇰🇪"
  | "🇰🇬"
  | "🇰🇭"
  | "🇰🇮"
  | "🇰🇲"
  | "🇰🇳"
  | "🇰🇵"
  | "🇰🇷"
  | "🇰🇼"
  | "🇰🇾"
  | "🇰🇿"
  | "🇱🇦"
  | "🇱🇧"
  | "🇱🇨"
  | "🇱🇮"
  | "🇱🇰"
  | "🇱🇷"
  | "🇱🇸"
  | "🇱🇹"
  | "🇱🇺"
  | "🇱🇻"
  | "🇱🇾"
  | "🇲🇦"
  | "🇲🇨"
  | "🇲🇩"
  | "🇲🇪"
  | "🇲🇫"
  | "🇲🇬"
  | "🇲🇭"
  | "🇲🇰"
  | "🇲🇱"
  | "🇲🇲"
  | "🇲🇳"
  | "🇲🇴"
  | "🇲🇵"
  | "🇲🇶"
  | "🇲🇷"
  | "🇲🇸"
  | "🇲🇹"
  | "🇲🇺"
  | "🇲🇻"
  | "🇲🇼"
  | "🇲🇽"
  | "🇲🇾"
  | "🇲🇿"
  | "🇳🇦"
  | "🇳🇨"
  | "🇳🇪"
  | "🇳🇫"
  | "🇳🇬"
  | "🇳🇮"
  | "🇳🇱"
  | "🇳🇴"
  | "🇳🇵"
  | "🇳🇷"
  | "🇳🇺"
  | "🇳🇿"
  | "🇴🇲"
  | "🇵🇦"
  | "🇵🇪"
  | "🇵🇫"
  | "🇵🇬"
  | "🇵🇭"
  | "🇵🇰"
  | "🇵🇱"
  | "🇵🇲"
  | "🇵🇳"
  | "🇵🇷"
  | "🇵🇸"
  | "🇵🇹"
  | "🇵🇼"
  | "🇵🇾"
  | "🇶🇦"
  | "🇷🇪"
  | "🇷🇴"
  | "🇷🇸"
  | "🇷🇺"
  | "🇷🇼"
  | "🇸🇦"
  | "🇸🇧"
  | "🇸🇨"
  | "🇸🇩"
  | "🇸🇪"
  | "🇸🇬"
  | "🇸🇭"
  | "🇸🇮"
  | "🇸🇯"
  | "🇸🇰"
  | "🇸🇱"
  | "🇸🇲"
  | "🇸🇳"
  | "🇸🇴"
  | "🇸🇷"
  | "🇸🇸"
  | "🇸🇹"
  | "🇸🇻"
  | "🇸🇽"
  | "🇸🇾"
  | "🇸🇿"
  | "🇹🇦"
  | "🇹🇨"
  | "🇹🇩"
  | "🇹🇫"
  | "🇹🇬"
  | "🇹🇭"
  | "🇹🇯"
  | "🇹🇰"
  | "🇹🇱"
  | "🇹🇲"
  | "🇹🇳"
  | "🇹🇴"
  | "🇹🇷"
  | "🇹🇹"
  | "🇹🇻"
  | "🇹🇼"
  | "🇹🇿"
  | "🇺🇦"
  | "🇺🇬"
  | "🇺🇲"
  | "🇺🇳"
  | "🇺🇸"
  | "🇺🇾"
  | "🇺🇿"
  | "🇻🇦"
  | "🇻🇨"
  | "🇻🇪"
  | "🇻🇬"
  | "🇻🇮"
  | "🇻🇳"
  | "🇻🇺"
  | "🇼🇫"
  | "🇼🇸"
  | "🇽🇰"
  | "🇾🇪"
  | "🇾🇹"
  | "🇿🇦"
  | "🇿🇲"
  | "🇿🇼"
  | "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
  | "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  | "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
