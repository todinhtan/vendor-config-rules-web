import config from '../config';
import axios from 'axios';
import HttpStatusCode from 'http-status-codes';

async function getRules(vendorId) {
  try {
    if (vendorId === undefined || vendorId === null) return null;
    const response = await axios.get(`${config.api.prefix}/public/rules-engine/${vendorId}/filters`);
    if (response && response.status === HttpStatusCode.OK && response.data) return response.data;
  } catch (error) {
    // just return null
  }
  return null;
}

async function saveRules(vendorId, filters) {
  try {
    if (vendorId === undefined || vendorId === null) return null;
    if (filters === undefined || filters === null) return null;
    const response = await axios.post(`${config.api.prefix}/public/rules-engine/${vendorId}/filters`, { filters });
    if (response && response.status === HttpStatusCode.OK && response.data) return response.data;
  } catch (error) {
    // just return null
  }
  return null;
}

export default {
  getRules: (vendorId) => getRules(vendorId),
  saveRules: (vendorId, filters) => saveRules(vendorId, filters),
}