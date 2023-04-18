import PropTypes from 'prop-types'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="625"
      height="875"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBoarder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed
