/**
 * Supabase Backend Client Integration for Hello Sunshine Cafe
 * -------------------------------------------------------------
 * Seamlessly captures all website inquiries (reservations, custom orders,
 * feedback/contact) and inserts them directly into Supabase tables.
 */
(function () {
  let client = null;

  function initClient() {
    if (client) return client;
    const config = window.SUPABASE_CONFIG || {};
    const url = config.url || '';
    const key = config.anonKey || config.legacyAnonKey || '';

    const isPlaceholder = !url || url.includes('your-project-id') || !key || key.includes('placeholder');

    if (!isPlaceholder && window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        client = window.supabase.createClient(url, key);
        console.log('✅ Supabase Client initialized successfully for Hello Sunshine Cafe:', url);
      } catch (e) {
        console.error('❌ Failed to initialize Supabase client:', e);
      }
    }
    return client;
  }

  window.CafeSupabase = {
    /**
     * Check if client is initialized with valid credentials
     */
    isConfigured: function () {
      const config = window.SUPABASE_CONFIG || {};
      const url = config.url || '';
      const key = config.anonKey || config.legacyAnonKey || '';
      return !(!url || url.includes('your-project-id') || !key || key.includes('placeholder'));
    },

    /**
     * Get underlying client instance
     */
    getClient: function () {
      return initClient();
    },

    /**
     * Save Table Reservation to Supabase
     */
    saveReservation: async function (formData) {
      const sb = initClient();
      const payload = {
        name: formData.name,
        phone: formData.phone,
        reservation_date: formData.date,
        reservation_time: formData.time,
        guests: formData.guests || '1 Guest',
        seating_preference: formData.seating || 'Any Available',
        notes: formData.notes || null,
        status: 'pending'
      };

      if (!sb) {
        console.warn('⚠️ Supabase client not available. Saving to offline backup:', payload);
        const localLogs = JSON.parse(localStorage.getItem('cafe_offline_reservations') || '[]');
        localLogs.push({ ...payload, created_at: new Date().toISOString() });
        localStorage.setItem('cafe_offline_reservations', JSON.stringify(localLogs));
        return { success: true, simulated: true, payload };
      }

      // Insert without .select() so public visitors can write without needing SELECT permission on sensitive guest data
      const { data, error } = await sb
        .from('reservations')
        .insert([payload]);

      if (error) {
        console.error('❌ Supabase reservation insertion error:', error);
        throw error;
      }
      return { success: true, data };
    },

    /**
     * Save Custom Order Tray Inquiry to Supabase
     */
    saveOrderInquiry: async function (orderData) {
      const sb = initClient();
      const payload = {
        customer_name: orderData.customerName,
        customer_phone: orderData.customerPhone,
        items: orderData.items || [],
        estimated_total: parseFloat(orderData.estimatedTotal) || 0.00,
        special_instructions: orderData.notes || null,
        status: 'pending'
      };

      if (!sb) {
        console.warn('⚠️ Supabase client not available. Saving order to offline backup:', payload);
        const localLogs = JSON.parse(localStorage.getItem('cafe_offline_orders') || '[]');
        localLogs.push({ ...payload, created_at: new Date().toISOString() });
        localStorage.setItem('cafe_offline_orders', JSON.stringify(localLogs));
        return { success: true, simulated: true, payload };
      }

      const { data, error } = await sb
        .from('order_inquiries')
        .insert([payload]);

      if (error) {
        console.error('❌ Supabase order inquiry insertion error:', error);
        throw error;
      }
      return { success: true, data };
    },

    /**
     * Save General Contact / Feedback Inquiry to Supabase
     */
    saveContactInquiry: async function (inquiryData) {
      const sb = initClient();
      const payload = {
        name: inquiryData.name,
        email: inquiryData.email || null,
        phone: inquiryData.phone || null,
        subject: inquiryData.subject || 'Website Inquiry',
        message: inquiryData.message,
        status: 'new'
      };

      if (!sb) {
        console.warn('⚠️ Supabase client not available. Saving inquiry to offline backup:', payload);
        const localLogs = JSON.parse(localStorage.getItem('cafe_offline_inquiries') || '[]');
        localLogs.push({ ...payload, created_at: new Date().toISOString() });
        localStorage.setItem('cafe_offline_inquiries', JSON.stringify(localLogs));
        return { success: true, simulated: true, payload };
      }

      const { data, error } = await sb
        .from('contact_inquiries')
        .insert([payload]);

      if (error) {
        console.error('❌ Supabase contact inquiry insertion error:', error);
        throw error;
      }
      return { success: true, data };
    }
  };
})();
