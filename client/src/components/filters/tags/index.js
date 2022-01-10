import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TagsComponent from "./tags";
import * as actions from "./actions";

const Tags = () => {
  const { failure, loading, tags, error_message, selectedTags } = useSelector(
    (state) => state.tags
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getTags());
  }, []);

  const setTags = (tag) => {
    dispatch(actions.filterByTags(tag));
  };

  return (
    <TagsComponent
      list={tags}
      loading={loading}
      failure={failure}
      error_message={error_message}
      selected={selectedTags}
      handler={setTags}
    />
  );
};

export default Tags;
