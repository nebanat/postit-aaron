export default {
  /**
   *
   * @param {req} req
   * @param {res} res
   * @return {group} group
   */
  createNewGroup(req, res) {
    return res.send({
      message: 'new group touched',
    });
  }
};

