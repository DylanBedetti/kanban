exports.getBoardViewQuery = `SELECT public.comments.content as comment, public.comments.cards_id, cards.title as card_title, cards.description as card_description, 
cards.lists_id, lists.title as list_title, lists.boards_id, boards.name as board_name, boards.id as board_id
FROM trello.public.comments
FULL JOIN cards ON cards.id = public.comments.cards_id
FULL JOIN lists ON lists.id = cards.lists_id
FULL JOIN boards ON boards.id = lists.boards_id
WHERE boards.id = 1
`;
