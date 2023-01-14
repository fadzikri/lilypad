import axios from "axios";
import { useEffect, useState } from "react";

const baseURLEmoji = "https://raw.githubusercontent.com/abourtnik/emojis-world/master/scripts/emojis.json"

const Emoji = () => {
    const [fetchEmoji, setFetchEmoji] = useState([]);

    useEffect(() => {
        const emojiData = async () => {
            try {
                const { data } = await axios.get(baseURLEmoji);
                setFetchEmoji(data);
            } catch (error) {
                console.log(error);
            }
        }
        emojiData();
    }, []);

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {fetchEmoji.map((em) => (
                    <EmojiElement
                    key={em.id}
                    name={em.name}
                    emoji={em.emoji}
                    unicode={em.unicode}/>
                ))}
            </div>
        </div>
    );
}

const EmojiElement = ({name, emoji, unicode}) => {
    return (
        <div className="col">
            <p>{emoji}</p>
            <p>{name}</p>
            <p>{unicode}</p>
        </div>
    )
}

export default Emoji;

// {
//     "id": 1,
//     "name": "grinning face",
//     "emoji": "😀",
//     "unicode": "1F600",
//     "category": {
//       "id": 1,
//       "name": "Smileys & Emotion"
//     },
//     "sub_category": {
//       "id": 1,
//       "name": "face-smiling"
//     },
//     "children": [],
//     "keywords": [
//       "happy",
//       "smiley",
//       "emotion",
//       "joy",
//       "positive",
//       "beaming",
//       "lol",
//       "cool",
//       "fun",
//       "xd",
//       "mdr",
//       "good",
//       "selfie"
//     ],
//     "version": "1.0"
// }
// <p>&#x1F3F4;&#xE0067;&#xE0062;&#xE0073;&#xE0063;&#xE0074;&#xE007F;</p>